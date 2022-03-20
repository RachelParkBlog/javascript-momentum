const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hours}:${min}:${sec}`;
}

getClock(); //웹사이트가 로드되자마자 실행하고
setInterval(getClock, 1000); //또 매초마다 다시 실행
