var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
// 첫 번째 인자 -> 삭제를 시작할 인덱스 (0부터 시작)
// 두 번째 인자 -> 삭제할 인자의 수
// 세 번째 인자 -> 첫 번째 인자의 인덱스에 넣을 수
console.log(arr);