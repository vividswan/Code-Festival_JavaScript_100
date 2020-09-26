const num = prompt("입력");
let result = "";
let arr = [];
while(num){
    arr.push(num%2);
    num = parseInt(num/2,10);
}
arr.reverse();
arr.forEach((element) => {
    result+=element;
});
console.log(result);