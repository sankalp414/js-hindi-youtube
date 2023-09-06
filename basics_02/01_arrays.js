//array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["shakitman", "nagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]); 

//Array methods

// myArr.push(6); //it add a new value at the end of the array
// myArr.push(7);
// myArr.pop(); // it removes the last element of the array
// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9)); //it seaches weather the element is present in the array or not
// console.log(myArr.indexOf(9)); //it searches the index of the elment which is written between the parenthesis of the metyhod

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("b ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);