const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls , cryptography, network call
    
    setTimeout(function(){ //settimeout function
        console.log('Async task is complete');
        resolve()
    },1000);
}); 

promiseOne.then(function(){  //.then has direct relation with resolve method in this the function will get the argument which is done previously
    console.log("promise consumed");
},1000);



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "hitesh", password:"123"})
        }else{
            reject('ERROR: something went wrong');
        }
    },1000)
})

const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is in the resolved or rejected"))

console.log(username);


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)

});

async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response); 
}    
consumePromiseFive()

fetch("")
