function SetUserName (username){
    this.username = username
}

function createUser(username,email,password){
    SetUserName.call(this,username)
    
    this.email = email
    this.password = password
}

const chai = new createUser('sankalp','sankalp@fb.com','1233334')

console.log(chai);