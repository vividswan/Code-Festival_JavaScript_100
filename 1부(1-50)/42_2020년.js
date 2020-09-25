const month = prompt("달을 입력하세요.");
const day = prompt("일을 입력하세요.");

function func(month, day){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const res = Date("2020-"+month+"-"+day);
    return day[res.getDay()];
}
console.log(func(month,day));