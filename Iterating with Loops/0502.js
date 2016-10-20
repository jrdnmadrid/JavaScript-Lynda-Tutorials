//This is the "For loops: Enumerative" video tutorial from the "Introducing the JavaScript Language" series. 


//iterate over an array. This assigns p a number and when executed Home is 0, About us is 1 and so on.

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (var p in pageNames) {
    console.log(p + ' is ' + pageNames[p]);
}

//iterate over an object. This would create first is home, second is About us etc. 
var pages = {
    'first': 'Home',
    'second': 'About us',
    'third': 'Contact us',
    'fourth': 'JavaScript Playground',
    'fifth': 'Blog',
};

//make sure you use "hasOwnProperty" (uninherited property) to pull from object's own attributes instead of outside properties. 
for (var p in pages) {
    if (pages.hasOwnProperty(p)) {
        console.log(p + ' is ' + pages[p]);
    }
}


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...in