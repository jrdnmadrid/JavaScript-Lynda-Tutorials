//This is the "Regular Expressions" video tutorial from the "Introducing the JavaScript Language" series. 


//We will take these 4 strings and search 'this'
var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';


//we will use the test method, passing through each string into function and take result and print it.
var regex = /this/;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

//Using that method, we only get back 1 of four b/c of case sensitive. 
//we will add an i for case insensitive and now it returns all 4 as true. 
var regex = /this/i;

//the carrot searches for the word at the beginning of the sentence
regex = /^this/i;
//The $ searches at the end.
regex = /this$/i;
//a dot means any character, so if want to check a dot, need to escape so use escape. 
regex = /ever\.$/i;
//Just using the dot after letters will search to see if a word has the first 4 letters (moun).
regex = /Moun.$/i;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://www.regular-expressions.info