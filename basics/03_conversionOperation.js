// let score ="33abs";
// let score =null;
let score = undefined;

// console.log(typeof(score));
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1;
let isLoggedIn = ""; //variable

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1 ==> true; 0=> false
//""==>false ; "sankalp"=> true

let someNumber =33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** operations **************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "hello";
let str2 = " Sankalp";

let str3 = str1 +str2;
console.log(str3); // output will be the value of str3 


console.log("1" + 2); //output will be 12
console.log(1 + "2"); //output will be 12
console.log("1" + 2 + 2); // output will be 122 because first thing is string so it consider all number as string
console.log(1 + 2 + "2"); // output will be 32 because it starts with number therefore it treat it as a number and concat with the string 

console.log(+true); //it shows very bad practice to code it should not be done and the output will be 1
console.log(+""); //it also should not be done in professional area 

let num1, num2,num3

num1 = num2 = num3 = 2+2 //it produces confusion which is not good so it should not be done

let gameCounter =100;
gameCounter++;

console.log(gameCounter); // the output will be 101