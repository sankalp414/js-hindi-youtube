//singleton it is made when we make object with a constructofr
//Object.create

//object literals

const JsUser = {
    name: "sankalp",
    "fullname": "sankalp sharma",
    age: 21,
    location: "bhilai",
    email: "snakalp@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);


JsUser.email = "sankalp@1212344";
Object.freeze(JsUser);
JsUser.email = "dhdhhddh";
console.log(JsUser);