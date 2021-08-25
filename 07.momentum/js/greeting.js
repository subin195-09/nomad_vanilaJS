const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');
const greetingSpan = greeting.querySelector('span');
const greetingButton = greeting.querySelector('button');
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginBtnClick() {
	//console.dir(loginInput);
	const value = loginInput.value;
	if (value === "")
		alert("Please Write Your Name");
	else if (value.length > 15)
		alert("Your name is too long.");
	else
		console.log("hello", value);
}

function onLogoutBtnClick() {
	localStorage.removeItem(USERNAME_KEY);
	greeting.classList.add(HIDDNE_CLASSNAME);
	loginForm.classList.remove(HIDDNE_CLASSNAME);
	loginInput.value = "";
	deactivateToDo();
}

function onLoginSubmit(event) {
	// 브라우저 기본 동작을 막아준다.
	event.preventDefault();
	loginForm.classList.add(HIDDNE_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
	activeToDo();
}

function paintGreetings(name) {
	greetingSpan.innerText = `Hello, ${name}!`;
	greetingButton.addEventListener("click", onLogoutBtnClick);
	greeting.classList.remove(HIDDNE_CLASSNAME);
}

loginButton.addEventListener('click', onLoginBtnClick);
if (savedUsername === null) {
	loginForm.classList.remove(HIDDNE_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings(savedUsername);
};

