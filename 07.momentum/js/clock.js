const clock = document.querySelector('h2#clock');

clock.innerText = "00:00";

function sayHello() {
	console.log("hello");
}

function saySkim() {
	console.log("skim");
}

// 1000ms(1초)마다 sayhello 함수를 호출한다.
// setInterval(sayHello, 1000);

// 1000ms(1초)후 saySkim 함수를 호출한다.
setTimeout(saySkim, 1000);

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	const time = `${hours}:${minutes}:${seconds}`;

	clock.innerText = time;
}

getClock();
setInterval(getClock, 1000);
