// if conditional statement

const isUserLoggedIn = true;

const temperature =41;

// if(temperature < 40){
//     console.log("less then 50");
// }else{
//     console.log("tremeprature is greater then 50");
// }

// <, >, <=, >=, ==, !=, ===, !== these are the comparison operators which are used to compare two values


// const score = 200;

// if(score> 100){
//     const power = "fly";
//     console.log(`User Power ${power}`);
// }

// const balance = 2000;

// // if(balance>500) console.log("test");

// if(balance < 500){
//     console.log(`less then 500`);

// }else if(balance < 750){
//     console.log(`less then 750`);
// }else if(balance < 900){
//     console.log(`less then 900`);
// }else {
//     console.log(`less then 1200`);
// }


const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==4){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is Logged in");
}