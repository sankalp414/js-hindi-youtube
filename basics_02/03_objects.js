//singleton it is made when we make object with a constructor
//Object.create

//object literals
const mySym = Symbol("key1"); // here we declare a symbol
const JsUser = { // object
    name: "sankalp", //by default all of this accesed as a string
   "fullname": "sankalp sharma", //it cannot be accessed by . notation so we have to access it by the help of [""]
    age: 21,
    [mySym]: "myKey1",  //to use symbol as a key of the object we have to put the symbol under the [] because otherwise it will be accesssed as a string

    location: "bhilai",
    email: "snakalp@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]); // it can only be used by thsi way only 

JsUser.email = "sankalp@1212344";
//Object.freeze(JsUser); // it freezes the object after ahich nothing can be changed in the object
JsUser.email = "shonty@123mfnf";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
 
console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo());