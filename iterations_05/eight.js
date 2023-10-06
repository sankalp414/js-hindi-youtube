const myNums =[1,2,3];

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)

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