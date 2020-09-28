const str = prompt("입력");
let str2 = "";
for(let i=0;i<str.length;i++){
    if(str[i]===str[i].toLowerCase()) str2+=str[i].toUpperCase();
    else str2+=str[i].toLowerCase();
}
console.log(str2);