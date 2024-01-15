const API_KEY = "0689c82ef7ed513b112b24ce8c10c23e";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
console.log(searchBox);
const searchBtn = document.querySelector(".search button");

const checkWeatherData = async function (city) {
  const response = await fetch(API_URL + city + `&appId=${API_KEY}`);
  const data = await response.json();

  const cityDetail = document.querySelector(".city");
  const temperatureDetail = document.querySelector(".temperature");
  const humidityDetail = document.querySelector(".humidity");
  const windDetail = document.querySelector(".wind");

  cityDetail.innerHTML = data.name;
  temperatureDetail.innerHTML = Math.round(data.main.temp) + "°c";
  humidityDetail.innerHTML = data.main.humidity + "%";
  windDetail.innerHTML = data.wind.speed + " km/h";
};

searchBtn.addEventListener("click", () => {
  checkWeatherData(searchBox.value);
});
