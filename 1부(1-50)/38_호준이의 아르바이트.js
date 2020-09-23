const arr = prompt("입력").split(' ');
arr.sort(function(a,b){
    return b-a;
});
let result = 0;
let cnt = 1;
let nowMax = arr[0];
for(let i=0;i<arr.length;i++){
    if(nowMax>arr[i]){
        cnt++;
        nowMax=arr[i];
    }
    if(cnt==4) break;
    result++;
}
console.log(result);