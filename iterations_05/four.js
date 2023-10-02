const myObject ={
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}//this is an object

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming =["js", "rb", "py", "java", "cpp"];

for (const key in programming) { // this is an for in loop which is mainly used for array
    console.log(programming[key]);
}