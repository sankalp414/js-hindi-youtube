// const tinderUser = new Object();

const tinderUser ={}

tinderUser.id = "123abc";
tinderUser.name = "shonty";
tinderUser.isLoggedin = false;

console.log(tinderUser);

const regularUser ={
    email:"sankalp@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Sankalp",
            lastName: "Sharma"
        }
    }
}

console.log(regularUser.fullname);

const obj1 ={
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2} we cannot do this because it will look like object is under another object

//const obj3 = Object.assign({},obj1, obj2) // this is the right way to do

const obj3 = {...obj1, ...obj2};


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

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));