//alert("Hi :)");

// variable const, let, var
// never var
const a = 5;
const b = 2;
let myName = "skim";

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);
myName = "soobin"
console.log("hello " + myName);

//array
const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const testArray = [1, 2, "skim", undefined, null, 1.5, false];

console.log(testArray);
console.log(dayOfWeek[0]);
dayOfWeek.push("add");
console.log(dayOfWeek);

console.log(dayOfWeek[100]);

//object
const player = {
    name: "skim",
    points: 10,
    age: 27
}

console.log(player);
console.log(player.name);

// player 자체를 바꾸는게 아니기 때문에 const 에러는 발생하지 않는다
// player = something : 이 경우에 const 에러가 발생
player.name = "soobin";
console.log(player.name);

player.lastname = "kim";
console.log(player);