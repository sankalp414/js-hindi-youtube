const myNums =[1,2,3];
//the accumalator takes the initial value and after the operation it will take the value ehich is created after the performing operations with the current value
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval; // firstly acc will take the 0 as the value and after this step the result will go to to the acc
}, 0)//the 0 here is the initial value 

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"JS course",
        price:999
    },
    {
        itemName:"java course",
        price:99
    },
    {
        itemName:"python course",
        price:9992
    }

]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price, 0);

console.log(priceToPay);