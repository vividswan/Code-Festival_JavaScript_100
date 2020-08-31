var a = 10;
var b = 2;
for (var i = 1; i < 5; i += 2) {
    a += i;
}
console.log(a + b);
// a += 1, a += 3 => a=14
// a+b = 14 + 2 = 16
// 16 출력