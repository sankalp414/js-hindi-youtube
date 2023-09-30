// const tinderUser = new Object();

const tinderUser ={} // by this we also can make object

tinderUser.id = "123abc";
tinderUser.name = "shonty";
tinderUser.isLoggedin = false;

//console.log(tinderUser);

const regularUser ={
    email:"sankalp@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Sankalp",
            lastName: "Sharma"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 ={
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2} we cannot do this because it will look like object is under another object

//const obj3 = Object.assign({},obj1, obj2) // this is the right way to do because {} gaurantees that the object will be accurate
// the first thing will be a target and the other one will be  source 

const obj3 = {...obj1, ...obj2}; // the most efficiant and mostly used way is by using {...}spread operator


//console.log(obj3);

const users = [
    {
        id:1,
        email:"sankalpshrm1111@gmail.com"
    },
    {
        id:1,
        email:"sankalpshrm1111@gmail.com"
    },
    {
        id:1,
        email:"sankalpshrm1111@gmail.com"
    }
];

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // by this we can extract key of the object
// console.log(Object.values(tinderUser)); // by this we can extract the values of the object
// console.log(Object.entries(tinderUser)); 



const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course; // this is known as destructuring it helps to call something more easily 

console.log(instructor); // now if we want to print courseInstructor so we can write instructor by the help of destructuring

