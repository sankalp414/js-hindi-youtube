const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //DB calls , cryptography, network call

    setTimeout(function () { //settimeout function
        console.log('Async task is complete');
        resolve()
    }, 1000);
});

promiseOne.then(function () {  //.then has direct relation with resolve method in this the function will get the argument which is done previously
    console.log("promise consumed");
}, 1000);



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: something went wrong');
        }
    }, 1000)
})

promiseFour
    .then((user) => {  //you cannot store the result in a variable we can resolve it by only implimenting again then it is known as chaining
        console.log(user);
        return user.username

    }).then((username) => {  //which ever value is in result is in the argument
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is in the resolved or rejected"))

console.log(username);


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)

});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E:', error);
    }
}
getAllUser()