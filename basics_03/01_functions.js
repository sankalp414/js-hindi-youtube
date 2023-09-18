// functions

function sayMyName(){
    console.log("don");
}

// sayMyName();

// function addTwoNumbers(number1, number2){//these are known as parameters
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){//these are known as parameters which are between the brackets
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3,5)// these are arguments which are between the barackets

//console.log(result);

function loginUserMessage(userName){
    if(!userName){
        console.log("please enter a userName");
        return
    }
    return `${userName} just Logged In`
}

// console.log(loginUserMessage("sankalp"));
console.log(loginUserMessage());


function calculateCardPrice(val1,val2,...num1){ //here {...} are rest operator it puts all element in an array
    return num1;

}
// console.log(calculateCardPrice(200, 400, 500, 2000));

const user = {
    userName: "sankalp",
    price: 199
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and the price is ${anyobject.price}`);
}

// handleObject(user);


