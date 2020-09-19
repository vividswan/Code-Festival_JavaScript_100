let numArr = prompt("입력").split(" ").reverse();
let ans = '';
for(let i =0;i <numArr.length;i++){
    ans+=numArr[i];
}
console.log(ans);