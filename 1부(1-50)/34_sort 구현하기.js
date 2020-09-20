const firstArr = prompt("입력");
const sortArr = firstArr.split(" ")
.sort(function(a,b){
    return a-b;
}).join(" ");
if(firstArr===sortArr){
    console.log("YES\n");
}
else console.log("NO\n");