const str = prompt("입력");
let num=0;
for(let i=0;i<str.length;i++){
    num+=parseInt(str[i],10);
}
console.log(num);