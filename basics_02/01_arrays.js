//array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["shakitman", "nagraj"];

const myArr2 = new Array(1, 2, 3, 4); // we can also create array by this method
// console.log(myArr[1]); 

//Array methods

// myArr.push(6); //it add a new value at the end of the array
// myArr.push(7);
// myArr.pop(); // it removes the last element of the array

// myArr.unshift(9); //it adds an element in the starting of the array
// myArr.shift(); // it removes an element from the starting of the array

// console.log(myArr.includes(9)); //it seaches weather the element is present in the array or not it will return true or false as an output if the element is present then the output will be true otherwise false
// console.log(myArr.indexOf(9)); //it searches the index of the elment which is written between the parenthesis of the metyhod

const newArr = myArr.join(); // adds all the element of the array into the string
// console.log(myArr);
// console.log(newArr); // its output will be of type string


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); //it returns the copy of section of an array
console.log(myn1);

console.log("b ", myArr);

const myn2 = myArr.splice(1,3); //after this only the left over element will be left in the main array unlike slice 
console.log(myn2);