const arr = prompt("입력").split(" ");
let now = parseInt(arr[0],10);
let swc = true;
for(let i=1;i<arr.length;i++){
  if(now+1==parseInt(arr[i],10)) now=parseInt(arr[i],10);
  else{
    swc=false;
    break;
  }
}
if(swc) console.log("YES");
else console.log("NO");