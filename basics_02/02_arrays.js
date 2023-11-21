const marvel_heroes = ["Thor", "IronMan", "SpiderMan"];
const dc_heroes = ["SuperMan", "Flash", "BatMan"];

// marvel_heroes.push(dc_heroes); //it enters a new element in the array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes); // concat returns a new array where as push adds a new element in the arraya
//push and conscatinate are used to add element in the array but we have another way which is widely used in the communitywhich is knoew as rest and spread operator
// console.log(all_heroes);

// to seperate two arrays from each ither we use [...arrayname, ...arrayname] which is known as spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // it will print the output of the array

const anotherArray =[1,2,3,[4,5,6], [6,7, [4,5] ] ];

const real_another_array = anotherArray.flat(Infinity); // it returns the array concatinated recusively we can also give the depth till which we want to concatinate
console.log(real_another_array); //console.log array it will print the array



console.log(Array.isArray("sankalp")) // it returns whether the the thing between the () is an array or not
console.log(Array.from("sankalp")); //it will make it an array
console.log(Array.from({name: "sankalp"})); //interesting case because we have to tall it that we want to make an array of which kind

let score1 = 100;
let score2 = 200;
let score3 = 600;

console.log(Array.of(score1,score2,score3));
