// for of

// const arr = [1,2,3,4];
// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "hello world";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);    
// }

// Maps it is known as for having unique values in this the key value pair cnnot be repeated

const map =new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('FR', 'France');

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myobject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myobject) {  //it shows error that objects are not iterables
//     console.log(key, ':-', value);
// }