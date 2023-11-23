let date = new Date();
console.log(date);
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${day}-${month}-${year}`;
console.log(fullDate);
