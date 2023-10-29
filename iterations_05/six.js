//const coding = ['js', 'ruby', 'python', 'cpp'];

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// }) // it doesnot returns the value by default

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.filter((num)=> num > 4 ); //in this we have call back function and in which we have a condition
// and if we put the {} in the condition then it will return the empty object the you have to write the return 

// const newNums = myNums.filter((num)=>{
//     return num>4; // if we use these {} then we have to use return otherwise it will return an empty array
// });

//console.log(newNums); // this will print new nums it will contain those numbers which will satisfy the conditions



const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'non-Fiction', publish: 1982, edition: 2009},
    {title: 'Book Three', genre: 'history', publish: 1983, edition: 2006},
    {title: 'Book Four', genre: 'science', publish: 1984, edition: 2001},
    {title: 'Book Five', genre: 'maths', publish: 1985, edition: 2002},
    {title: 'Book Six', genre: 'horror', publish: 1986, edition: 2003},
    {title: 'Book Seven', genre: 'organic', publish: 1987, edition: 2005},
    {title: 'Book Eight', genre: 'force', publish: 1988, edition: 2010},
    {title: 'Book Nine', genre: 'untold', publish: 1989, edition: 2011},
    {title: 'Book Ten', genre: 'arcade', publish: 1990, edition: 2012},
    {title: 'Book Eleven', genre: 'adventure', publish: 1991, edition: 2013},
    {title: 'Book Twelve', genre: 'nature', publish: 1992, edition: 2014},
    {title: 'Book Thirteen', genre: 'phuscho', publish: 1993, edition: 2024},
    {title: 'Book Fourteen', genre: 'rocking', publish: 1994, edition: 2034},
    {title: 'Book Fifteen', genre: 'romantics', publish: 1995, edition: 2044},
]



const userBooks = books.filter((book)=> book.genre === 'history') // it will check whether the condition is true or not and if the condition is true then it will print that object
console.log(userBooks);