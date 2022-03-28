const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos array를 local storage 안에 집어넣기
}

function removeToDoList(event, id) {
  //console.dir(event.target); //클릭된 html element (button태그)
  const li = event.target.parentElement; //element의 부모, 즉 클릭한 버튼의 부모요소인 li를 의미함
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const lists = document.createElement("span");
  lists.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //toDos에 parseToDos를 넣어서 원래 있던 toDos들이 없어지지 않도록 하기
  parsedToDos.forEach(paintToDo); // 여기서 forEach 함수는 paintToDo를 parsedToDos의 배열 요소마다 실행한다.
}
