 const coding = ['js', 'ruby', 'python', 'cpp'];


//in for each loop it contains callback function which does not contain a name
// the callback function will go to every value of the array


// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })

// console.log(values);

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr);

// })

const myCoding=[
   {
    languageName: "JavaScript",languageFileName:"js"
   },
   {
    languageName: "c++",languageFileName:"cpp"
   },
   {
    languageName: "Java",languageFileName:"java"
   }

];

myCoding.forEach((arr)=>{
    console.log(arr);
})

const myNums =[1,2,3,4,5,6,7,8,9,10]; //array

// let newNums= myNums.filter((num)=> { //always write return in this filter
//     return num > 5
// });
// console.log(newNums);

// const newNums =[];
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num) //it pushs the element to the array
        
//     }
// })

// console.log(newNums);

