const API_KEY = "0689c82ef7ed513b112b24ce8c10c23e";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const checkWeatherData = async function (city) {
  const response = await fetch(API_URL + city + `&appId=${API_KEY}`);

  if (response.status == 404) {
    const errorMsg = document.querySelector(".error");
    errorMsg.style.display = "block";
    document.getElementsByClassName(".weather").style.display = "none";
  }

  const data = await response.json();

  const cityDetail = document.querySelector(".city");
  const temperatureDetail = document.querySelector(".temperature");
  const humidityDetail = document.querySelector(".humidity");
  const windDetail = document.querySelector(".wind");
  const weatherImage = document.querySelector(".weather-icon");

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";

  cityDetail.innerHTML = data.name;
  temperatureDetail.innerHTML = Math.round(data.main.temp) + "°c";
  humidityDetail.innerHTML = data.main.humidity + "%";
  windDetail.innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clear") {
    weatherImage.src = "images/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherImage.src = "images/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImage.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImage.src = "images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImage.src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImage.src = "images/snow.png";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeatherData(searchBox.value);
});
