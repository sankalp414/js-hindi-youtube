const myNumbers = [1,2,3,4,5,6,7,8,9,10];






//const newNums=myNumbers.map((num)=> num + 10)// it automaticaly returns the value unlike forEach in which we have to write return in order to print the output

const newNums = myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=> num >= 40); // it is called chaining 

console.log(newNums);

// and always remember when we use {} in map and any where we have to write the return otherwise it will return undefined


