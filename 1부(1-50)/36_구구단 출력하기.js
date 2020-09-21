const num = prompt("입력");
let str = "";
for(let i=1;i<=9;i++){
    let now = i*num;
    str+=`${now} `;
}
console.log(str);