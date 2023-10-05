const myObject ={
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObject) { //majority times we use this loop in case of objects
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming =["js", "rb", "py", "java", "cpp"];

for (const key in programming) { 
    console.log(programming[key]);// when we only put key in between the () therefore we have to write it like this
}


// const map =new Map();
// map.set('IN', "India");
// map.set('USA', "United States Of America");
// map.set('FR', 'France');

// for (const key in map) { // it will show an error because map are not iterables
//     console.log(key);
// }