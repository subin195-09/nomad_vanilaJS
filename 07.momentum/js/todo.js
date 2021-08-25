const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let loginUser = localStorage.getItem(USERNAME_KEY);
let TODOS_KEY = "";
let getSavedToDos;

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDeleteBtn(event) {
	const parent =  event.target.parentElement;
	parent.remove();

	toDos = toDos.filter((toDo) => toDo.id !== parseInt(parent.id));
	saveToDos();
}

function paintToDo(newToDo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const btn = document.createElement("button");

	li.id = newToDo.id;
	li.appendChild(span);
	li.appendChild(btn);
	span.innerText = newToDo.text;
	btn.innerText = "✗";

	btn.addEventListener("click", handleDeleteBtn);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	 event.preventDefault();

	 const newToDo = toDoInput.value;
	 toDoInput.value = "";

	 const newToDoObj = {
		 text: newToDo,
		 id: Date.now()
	 };
	 toDos.push(newToDoObj);
	 paintToDo(newToDoObj);
	 saveToDos();
}

function activeToDo() {
	toDoForm.classList.remove(HIDDNE_CLASSNAME);
	toDoList.classList.remove(HIDDNE_CLASSNAME);
	loginUser = localStorage.getItem(USERNAME_KEY);
	TODOS_KEY = "toDos" + loginUser;
	getSavedToDos = localStorage.getItem(TODOS_KEY);
	if (getSavedToDos)
	{
		toDos = JSON.parse(getSavedToDos);
		toDos.forEach(toDo => {
			paintToDo(toDo)
		});
	}
	toDoForm.addEventListener("submit", handleToDoSubmit);
}

function deactivateToDo() {
	toDoForm.classList.add(HIDDNE_CLASSNAME);
	toDoList.classList.add(HIDDNE_CLASSNAME);
	toDoList.innerHTML = "";
}

if (loginUser) {
	activeToDo();
}
else {
	deactivateToDo();
}
