// for of

// const arr = [1,2,3,4];
// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "hello world";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);    
// }

// Maps

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
// for (const [key, value] of myobject) {
//     console.log(key, ':-', value);
// }