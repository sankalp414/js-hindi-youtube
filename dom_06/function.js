document.getElementById("title");

// dom starts here
//document.getElementById()// it used to target element by id so that we can use element which has the id 

//if we want to get the id as a result then 

document.getElementById().id;//this will give us the id of the element

//and if we want to take the class of the element as a result then

document.getElementById().className;

//and we have to use the attribute of the element then 

document.getElementById().getAttribute('id'); //in this we have to write what attribute we have to select

//now if we want to set an attribute then

document.getElementById().setAttribute('class','test heading'); // in this we firstly write what thing we want to set and next is thw value of the first thing and we can set two thing in a value

const title = document.getElementById('title');

title.style.backgroundColor = 'green' // this thing will change the background of the web page


title.style.padding = "12px" // it will give the padding to the element

//now how to extract content from the web page

document.textContent(); // it will return all the things 


document.innerText(); // it will return the things which are being displayed on the web page 


document.innerHTML();// it will return the html 

//now other selectors are as follows

document.querySelector()// it will select the first element of which is in the () but it will only select one 

//now if we want to select all then 

document.querySelectorAll() // it will select all those who contain the thing inside the ()

// the out of the statement in 45 line will be in nodelist to use that we have to use [] and we have to write the index which we have to use
// and we have to use forEach for node list because it is  not an array that why map will not work in this scenario

document.getElementsByClassName()//in this we will get an html collections as the result

//now we have to conver html collections so we will use 

// Array.from(templist) the templist is the variable which will store the value given by the line no. 45




