function onGeoOk() {}

function onGeoErr() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr); //위치 좌표
