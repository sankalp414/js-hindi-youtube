// for of

// const arr = [1,2,3,4];
// for (const num of arr) { // it loops over the array
//     console.log(num);
// }


// const greetings = "hello world";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);// the output will contain each letter of the word in each line in the output    
// }

// Maps it is known as for having unique values in this the key value pair cannot be repeated

const map =new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('FR', 'France');

// console.log(map);

for (const [key, value] of map) { //if we want to take key and value seprately we should use []
    console.log(key, ':-', value);
    
}


const myobject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myobject) {  //it shows error that objects are not iterables
//     console.log(key, ':-', value);
// }