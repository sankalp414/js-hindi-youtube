function multiplyByJs(num){
    this.num = num;
    return num*5;

}

multiplyByJs.power = 2;

console.log(multiplyByJs(5)); //output will be 25
console.log(multiplyByJs.power);  //output will be 2
console.log(multiplyByJs.prototype);

//function is a function but also an object(technically)
//everything in js is an object 

function createUser(username, score){
    this.username = username
    this .score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser('chai',25)
const tea = new createUser('tea',250)


chai.printMe()
tea.printMe()
