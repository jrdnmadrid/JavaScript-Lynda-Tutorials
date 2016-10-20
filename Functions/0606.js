//This is the "Understanding variable scope" video tutorial from the "Introducing the JavaScript Language" series. 


//The below function allows for the global variable to not change, while local to change

//this is a global variable
var myNum = 32;
var myResult = 'Success!';

function randomizer(limit) {

    //assigning a limit, 0 to limit. 
    var myNum = Math.floor(Math.random() * limit);
    //this function creates  a boxed off area to use without disrupting global variable. 
    console.log('myNum is' + myNum);
    console.log('Global myNum is' + window.myNum);

    return myNum;
}

//if you take out the var statement, after var myNum = Math.floor... then the global and local variables mirror eachother.

var myNum = 32;
var myResult = 'Success!';

function randomizer(limit) {

    //assigning a limit, 0 to limit. 
   myNum = Math.floor(Math.random() * limit);
    //this function creates  a boxed off area to use without disrupting global variable. 
    console.log('myNum is' + myNum);
    console.log('Global myNum is' + window.myNum);

    return myNum;
}


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions#Function_scope