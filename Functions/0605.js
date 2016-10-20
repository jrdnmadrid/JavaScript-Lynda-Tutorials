//This is the "Functions are objects" video tutorial from the "Introducing the JavaScript Language" series. 

// Here is a regular function

function speakSomething(what) {
    for (var i = 0; i < 10; i += 1) {
        console.log(what)
    }
}

// Here is the same function, first create variable and assign as an anonymous function. 

var speakSomething = function (what) {
    for (var i = 0; i < 10; i += 1) {
        console.log(what);
    }
}
//The below function calls the speakSomething variable to execute after 5 seconds. Can pass a function into a function. 
window.setTimeout(speakSomething, 5000);


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function