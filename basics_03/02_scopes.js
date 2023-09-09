//scopes

function one(){
    const userName = "Sankalp";

    function two(){
        const website = "youtube";
        //console.log(userName);
    }
    // console.log(website);

    two();

}
one();


if(true){
    const userName = "shonty";
    if(userName === "shonty"){
        const website = "youtube";
        //console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


//  +++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++


function addone(num){
    return num+1;

}

addone(5);


const addTwo = function(num){
    return num+2;
}

addTwo();