const list = prompt("입력").split(" ");
const num1 = Math.floor(parseInt(list[0], 10) / parseInt(list[1], 10));
const num2 = parseInt(list[0], 10) % parseInt(list[1], 10);
console.log(num1 + " " + num2);