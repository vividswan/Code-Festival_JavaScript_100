var n = prompt("입력");
let str = '';
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
        str += ' ';
    }
    for (var j = 0; j < i; j++) str += '*';
    str += '*';
    for (var j = 0; j < i; j++) str += '*';
    for (var j = 0; j < n - i - 1; j++) {
        str += ' ';
    }
    str += '\n';
}
console.log(str);