let num = 123.445;
let nanNumb = 0 / 0;

console.log(Number.isFinite(num));

console.log(Number.isNaN(nanNumb));

console.log(num.toPrecision(4));

console.log(num.toFixed(2));

console.log(Number.parseInt(num));
