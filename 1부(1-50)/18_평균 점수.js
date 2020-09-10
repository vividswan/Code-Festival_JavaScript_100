const str = prompt("입력");
const list = str.split(' ');
let sum =0;
for(var i =0; i<list.length;i++){
    sum += parseInt(list[i], 10);
}
console.log(Math.floor(sum/3));