let arr = [1,2,3,4,5];
for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
    // 시간복잡도 O(1)
}
arr.push(6);

let copyArr = arr.slice(); // 배열을 똑같이 복제
// 시간복잡도 O(1) X

for(let i =0;i<copyArr.length;i++){
    console.log(copyArr[i]);
}


let num = arr.pop(); // 마지막 배열의 수 pop
// 시간복잡도 O(1)
console.log(num);

arr.includes(5); // 1~5를 배열에 추가
// 시간복잡도 O(1) X

for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
    // 시간복잡도 O(1)
}