const title = document.getElementById("title");
const 제목 = document.querySelector("#title");

title.innerText = "Good Morning!";

const text = document.getElementsByClassName("text");

// className, tagName은 배열을 반환한다.
// querySelector는 단 하나의 요소만 가져온다.

function handleTitleClick() {
  //className으 getter이자 setter이다
  //첫번째방법
  //   if (title.className === "active") {
  //     title.className == "";
  //   } else {
  //     title.className = "active";
  //   }

  //두번째방법
  //const clickedClass = "clicked";
  //   if (title.classList.contains(clickedClass)) {
  //     title.classList.remove(clickedClass);
  //   } else {
  //     title.classList.add(clickedClass);
  //   }
  title.classList.toggle("active");
}

function handleMouseEnter() {
  title.innerText = "Mouse in here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone...";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "yellow";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("와이파이 연결을 확인해주세요");
}

function handleWindowOnline() {
  alert("네트워크에 연결되었습니다.");
}

title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; 위에꺼랑 같은의미
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// 윈도우 내장 이벤트
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offlie", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
