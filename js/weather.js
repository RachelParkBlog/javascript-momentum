function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function onGeoErr() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr); //위치 좌표
