const name = "Sankalp";
const repoCount = 16;
console.log(name + repoCount + "Value");

//below syntax is more readable and it is a mordern way to write strings

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Sankalp-ch'); //string is a object here

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); // output will be length of the string
console.log(gameName.toUpperCase()); // the output will be all in capital
console.log(gameName.charAt(2));  //the output will show the caharacter placed in position 2
console.log(gameName.indexOf('a')); //the output will show the index of the character

const newString = gameName.substring(0,4); // output will be the group of characters from 0 position to 4 position 
console.log(newString);

const anotherString = gameName.slice(-7, 2); 
console.log(anotherString);

const newStringOne = "    Sankalp    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // the trim will delete the blank space with in the string

const url = "https://sankalp.com/sa%20nkalp@sharma";

console.log(url.replace('%20','-')); //the replace method is used to replace a thing to another

console.log(url.includes('test')); //it will tel weather the string is present in the other stringor not
