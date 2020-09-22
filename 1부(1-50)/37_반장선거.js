const arr = prompt("입력").split(" ");
const result = {};
let num = 0;
let person = "";
for(let i=0;i<arr.length;i++){
    result[arr[i]] === undefined ? result[arr[i]]=1 : result[arr[i]]++;
}
const set = Array.from(new Set(arr));
for(let i =0; i<set.length;i++){
    if(num<result[set[i]]){
        num = result[set[i]];
        person =set[i];
    }
}
console.log(`${person}이(가) 총 ${num}표로 당선되었습니다.`);