const arr = prompt("입력").split(" ").map(
    (n) => {return parseInt(n,10);}
)
arr.sort(function(a,b){
    return b-a;
})

console.log(arr[0]);