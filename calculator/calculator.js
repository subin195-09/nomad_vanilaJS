const calculator = {
	add: function (a, b) {
		return (a + b);
	},
	minus: function (a, b) {
		return (a - b);
	},
	multiply: function (a, b) {
		return (a * b);
	},
	divide: function (a, b) {
		return (a / b);
	},
	powerof: function (a, b) {
		return (a ** b);
	}
};

const a = 10;
const b = 5;

console.log(calculator.add(a, b));
console.log(calculator.minus(a, b));
console.log(calculator.multiply(a, b));
console.log(calculator.divide(a, b));
console.log(calculator.powerof(a, b));

// 아주 오래된 방식, 보통 html과 css를 이용하여 자신만의 입력창을 쓴다
let age = prompt("How old are you?");

console.log(age);
console.log(typeof age, typeof parseInt(age));
if (isNaN(age)){
	console.log("Please enter a number");
} else {
	age = parseInt(age);
}
