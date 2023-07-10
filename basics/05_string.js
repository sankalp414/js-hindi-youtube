const name = "Sankalp";
const repoCount = 16;
console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Sankalp-ch'); //string is a object here

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7, 2);
console.log(anotherString);

const newStringOne = "    Sankalp    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sankalp.com/sa%20nkalp@sharma";

console.log(url.replace('%20','-'));

