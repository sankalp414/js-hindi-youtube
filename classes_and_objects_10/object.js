function multiplyByJs(num){
    return num*5;

}

multiplyByJs.power = 2;

console.log(multiplyByJs(5));
console.log(multiplyByJs.power);
console.log(multiplyByJs.prototype);


function createUser(username, score){
    this.username = username
}