const marvel_heroes = ["Thor", "IronMan", "SpiderMan"];
const dc_heroes = ["SuperMan", "Flash", "BatMan"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes);

// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // it will print the output of the array

const anotherArray =[1,2,3,[4,5,6], [6,7, [4,5] ] ];

const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("sankalp"))
console.log(Array.from("sankalp"));
console.log(Array.from({name: "sankalp"}));


