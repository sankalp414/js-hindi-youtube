// #Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('124232');
const anotherId = Symbol('124232')
console.log(id === anotherId); // the output will be false because it makes the thing inside the parenthesis unique thats why it is not showing true in the output



//Refernce Type (Non-primitive)

// Arrays, Objects, Functions


const heroes = ['shakti', 'nag', 'doga'];

let myObj = {
    name : "sankalp",
    age: 22,
}

const myFunction = function(){
    console.log("Heloo world");
}

console.log(typeof outsideTemp);