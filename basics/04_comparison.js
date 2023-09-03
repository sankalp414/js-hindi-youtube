// console.log("2" > 1);
// console.log("02" > 1);

//conversions like this should be avoided

console.log(null > 0);  // the output will be false because comarison operator treats null as 0 thats why the output is false
console.log(null == 0); // the output will be false because it doesnot treat null as zero
console.log(null >= 0); // comparison operator treats null as 0 that why the output will be true


console.log(undefined == 0); //the output will be false
console.log(undefined >= 0); //the output will be false
console.log(undefined <= 0); // the output will be false

// always write clean code 

// === it is a strict check it strictly checks the dattype of things which are being compared

console.log("2" === 2); // the output will be false becuse it strictly checks the datatype of the things which are being compared 
