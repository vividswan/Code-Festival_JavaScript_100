let sum = 0;
let str = "";
for(let i=1;i<=19;i++){
    sum+=i;
    str+=`${i}+`;
}
sum+=20;
str+=`20 = ${sum}`;
console.log(str);