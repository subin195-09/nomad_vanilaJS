console.log(document.head);

const title = document.getElementById("title");

console.log(title.id);
console.log(title.className);

const potatos = document.getElementsByClassName("potato");

// array 형태로 가져옴
console.log(potatos);

// 단 하나의 element를 return 해준다 (첫번째 element)
// 모든걸 검색 하고 싶을땐 querySelectorAll()을 사용
// id 검색 방법: #[id]
const firstPotato = document.querySelector(".potato div");
console.log(firstPotato);

// 내부를 보고 싶을때
// on~ : event의 종류
console.dir(firstPotato);

/*=======================EVENT=======================*/

function handleTitleClick() {
	// const	currentColor = firstPotato.style.color;
	// let		newColor;
	// if (currentColor === "gray")
	// 	newColor = "black";
	// else
	// 	newColor = "gray";
	// firstPotato.style.color = newColor;
	const clickedClass = "clicked";
	firstPotato.classList.toggle(clickedClass);
};

/* 원래 class name이 존재해도 상관없이 변경한다
function handleMouseEnter() {
	firstPotato.innerText = "mouse here";
	firstPotato.className = "over";
};

function handleMouseLeave() {
	firstPotato.innerText = "mouse leave";
	firstPotato.className = "";
} */

// 원래의 class name을 보존하면서 class name을 추가해준다.
// 조건문 : classList.contains([className])
function handleMouseEnter() {
	firstPotato.innerText = "mouse here";
	firstPotato.classList.add("over");
};

function handleMouseLeave() {
	firstPotato.innerText = "mouse leave";
	firstPotato.classList.remove("over");
}

function handleWindowResize() {
	document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
	alert("copy!");
}

function handleWindowOffline() {
	alert("SOS No WiFi");
}

function handleWindowOnline() {
	alert("Wifi is back");
};

firstPotato.addEventListener("click", handleTitleClick);
firstPotato.onmouseenter = handleMouseEnter;
firstPotato.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
// wifi event
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
