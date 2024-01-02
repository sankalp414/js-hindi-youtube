let myName = 'sankalp    '

// console.log(myName.trueLength);

let myHeroes = ['thor','spiderman'];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is${this.spiderman}`);
    }
}
Object.prototype.sankalp = function(){
    console.log(`sankalp is present in all objects`);
}
Array.prototype.heySankalp = function(){
    console.log(`Sankalp says Hello`);
}
// heroPower.sankalp()

myHeroes.sankalp();
myHeroes.heySankalp();

// heroPower.heySankalp()



// inheritance 
const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true 

}

const TeachingSupport ={
    isAvailable:false
}

const TaSupport ={
    makeAssignment : 'JS assignment',
    fullTime : false,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//Mordern Syntax


Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = 'sankalp  '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"sanku".trueLength()
"ICE".trueLength()