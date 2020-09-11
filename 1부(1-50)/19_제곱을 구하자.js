const str = prompt("입력");
const list = str.split(" ");
const num1 = parseInt(list[0], 10);
const num2 = parseInt(list[1], 10);
let answer = Math.pow(num1, num2);
console.log(answer);