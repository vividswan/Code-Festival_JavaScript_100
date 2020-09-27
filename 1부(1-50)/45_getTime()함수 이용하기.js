const date = new Date();
const num = date.getTime();
const year = num/1000/60/60/24/365 + 1970;
console.log(parseInt(year,10));