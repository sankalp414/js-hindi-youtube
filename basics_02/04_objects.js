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

// const obj3 = {obj1, obj2}

const obj3 = Object.assign({},obj1, obj2)

console.log(obj3);