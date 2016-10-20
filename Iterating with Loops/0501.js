//This is the "For loops: Sequential" video tutorial from the "Introducing the JavaScript Language" series. 

//For loops allow computer to do something over and over again.
//In this loop, we've initialized the variable (i = 0), created a stopping point ( i < 10) and the count each loop (i += 1). 
//then it is written out to console (console.log). 
for (var i = 0; i < 10; i += 1) {
    console.log(i)
}; 

//Now, let's create a real example. We are creating a loop that goes through each until identifying the correct page name.

var pageNames = ['Home', 'About us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i < pageNames.length; i += 1) {
    if (document.title = pageNames [i]) {
        console.log('We are here: ' + pageNames[i]); 
    } else {
        console.log('We are not here: ' + pageNames[i]); 
    }
}

//We've used pageNames[i] three times in the above code, let's simplify it. 
//I have assigned currentPageTitle and replaced pageNames[i] with it to help with readability. 

var pageNames = ['Home', 'About us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i < pageNames.length; i += 1) {
    var currenPageTitle = pageNames[i]; 

    if (document.title = currenPageTitle) {
        console.log('We are here: ' + currenPageTitle);
    } else {
        console.log('We are not here: ' + currenPageTitle);
    }
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#for_Statement
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for