//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`Db connected`);
})();

((name)=>{
    console.log(`Db connected two ${name}`);
})(`sankalp`);

((date)=>{
    console.log(`your dob is ${date}`);
})(`12`)