//This is the "More on arguments" video tutorial from the "Introducing the JavaScript Language" series. 


//JavaScript does not allow you to put defaults in parameters section, hence the below w/ ternary operator.  

function speakSomething(what, howMany) {
    //this pattern works nicely for default values:
    //check if argument is undefined and if it is, provide default. 
    var what = (typeof what !== 'undefined') ? what : 'Default speech';
    var howMany = (typeof howMany !== 'undefined') ? howMany : 10;

    for (var i = 0; i < howMany; i += 1) {
        console.log(what + " (" + i + ")");
    }
}


//adding machine function is below. Allows you to add any number of numbers. 

function addingMachine() {
    // initialize the total we'll be returning
    var total = 0;
    // loop over arguments array
    for (var i = 0; i < arguments.length; i += 1) {
        // grab the next number
        var number = arguments[i];
        // check if the argument is a number
        // if so, add it to the running total 
        if (typeof number === 'number') {
            total += number; 
        }
    }
    //done - return the total
    return total; 
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function