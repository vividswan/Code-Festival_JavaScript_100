var a = NaN;
console.log(Boolean(a));
// false
var b = 1;
console.log(Boolean(b));
// true
var c = "";
console.log(Boolean(c));
// false
var d = 0;
console.log(Boolean(d));
// false
var e = undefined;
console.log(Boolean(e));
// false

// JavaScript 에서는 null, undefined, 0, 빈 문자열, NaN, false 를 제외하고는 모두 참인 값으로 평가!