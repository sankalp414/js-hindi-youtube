const user = {
    userName: "Sankalp",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to the website`);
    }

}

//user.welcomeMessage()
//user.userName = "sanku"; // it will update the username key's value

//user.welcomeMessage(); // here it will output the upgraded value of the user name that is being changed in the line 12

// function chai(){
//     let userName = "sankalp"
//     console.log(this.userName); // this does not work in functions
// }

// chai();


const chai = () => {
    let userName = "sankalp";
    console.log(this.userName);   
}

// chai();

// const addTwo=(num1, num2)=>{return num1+num2};

// const addTwo=(num1, num2)=>(num1+num2);// in this we dont have to write return 
const addTwo=(num1, num2)=>({userName: "shanky"}); 


// console.log(addTwo(3,4));


// const myArray = [2,3,4,5,8,7];

// myArray.forEach()