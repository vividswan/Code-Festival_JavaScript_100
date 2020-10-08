function chkFunc(arr){
  cnt = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==='(') cnt++;
    else if(arr[i]===')') cnt--;
  }
  if(cnt!==0) return false;
  chkArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]==='(') chkArr.push('(');
    else if(arr[i]===')'){
      if(chkArr.length===0) return false;
      else chkArr.pop();
    }
  }
  return true;
}

let arr = prompt("입력").split("");
const result = chkFunc(arr);
if(result) console.log("YES");
else console.log("NO");