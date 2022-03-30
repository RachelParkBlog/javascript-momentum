require("dotenv").config();
const api = process.env.API_KEY;
const weather = document.querySelector("#weather");
const city = document.querySelector("#weather span:first-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr); //위치 좌표
