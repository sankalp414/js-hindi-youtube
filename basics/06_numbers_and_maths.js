const score = 400;
const balance = new Number(10);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const otherNumber = 123.89777; //variable

//console.log(otherNumber.toPrecision(3));

const hundereds = 1000000;

//console.log(hundereds.toLocaleString('en-IN'));

//++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); it will produce the output in the round figure
// console.log(Math.ceil(4.6)); // this not used generaly
// console.log(Math.floor(4.6)); // this is not used generaly
// console.log(Math.min(4,3,2,1)); 
// console.log(Math.max(4,3,2,1)); 

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

const min = 10;
const max = 200;

console.log(Math.floor(Math.random() * (max-min +1))+ min);