//This is the "Basic uses of functions" video tutorial from the "Introducing the JavaScript Language" series. 

fuddify("Be very quiet, I'm hunting rabbits"); //this returns "be vewy quiet, I'm hunting wabbits"
  
//let's look at this function. Inside parenthesis is an argument/parameter to allow context to be known. 

function fuddify(speech) {
    //if it's not a string, return an error message
    if (typeof speech !== 'string') return "Nice twy, wabbit!";

    //otherwise, make it sound like Elmer Fudd. 
    speech = speech.replace(/r/g, 'w');
    speech = speech.replace(/R/g, 'W'); 
    return speech;
}

//Let's create a function that will evaluate whether the number is even or odd. 

function isOdd(num) {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    } 
}


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function