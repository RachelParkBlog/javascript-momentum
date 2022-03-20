const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function removeToDoList(event) {
  //console.dir(event.target); //클릭된 html element (button태그)
  const li = event.target.parentElement; //element의 부모, 즉 클릭한 버튼의 부모요소인 li를 의미함
  toDoList.removeChild(li);
}

function paintToDo(newTodoList) {
  const li = document.createElement("li");
  const lists = document.createElement("span");
  lists.innerText = newTodoList;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", removeToDoList);

  li.appendChild(lists);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//todo 버튼 삭제하기
//새로고침해도 영역이사라지지 않게 하기
