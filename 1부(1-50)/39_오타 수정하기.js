function replaceFunc(str, bef, af){
    return str.split(bef).join(af);
}
const result = prompt("입력");
console.log(replaceFunc(result,"q","e"));