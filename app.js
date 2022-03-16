const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

loginForm.addEventListener("submit", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);

function onLoginBtnClick(e) {
  e.preventDefault();
  //어떤 이벤트든 default behavior(브라우저가 기본적으로 수행하는 동작) 실행이 되지 않도록 막는 기능
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick(e) {
  e.preventDefault();
  console.log(e);
  alert("가라");
}
