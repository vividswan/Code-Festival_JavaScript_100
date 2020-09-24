const weight = prompt("최대 무게 입력");
const num = prompt("인원 수 입력");
let total=0;
let cnt = 0;
for(let i=0;i<num;i++){
    const nowWeight = parseInt(prompt("무게를 입력하세요."),10);
    total+=nowWeight;
    if(total>weight) continue;
    cnt++;
}
console.log(cnt);