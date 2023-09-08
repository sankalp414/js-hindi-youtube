// functions

function sayMyName(){
    console.log("don");
}

// sayMyName();

// function addTwoNumbers(number1, number2){//these are known as parameters
//     console.log(number1 + number2)

// }
function addTwoNumbers(number1, number2){//these are known as parameters
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3,5)// these are arguments

//console.log(result);

function loginUserMessage(userName){
    if(!userName){
        console.log("please enter a userName");
        return
    }
    return`${userName} just Logged In`
}

// console.log(loginUserMessage("sankalp"));
console.log(loginUserMessage());