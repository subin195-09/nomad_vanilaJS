const imgs = [
	"0.jpeg",
	"1.jpeg",
	"2.jpeg",
	"3.jpeg",
	"4.jpeg",
	"5.jpeg",
	"6.jpeg",
	"7.jpeg",
	"8.jpeg",
	"9.jpeg",
];

// quotes에 존재하는 randomFloat, randomInt를 사용한다.
const choosemImg = imgs[randomInt];

const bgImg = document.createElement("img");

bgImg.src = `img/${choosemImg}`;

document.body.appendChild(bgImg);

console.log(bgImg);
console.log(choosemImg);
