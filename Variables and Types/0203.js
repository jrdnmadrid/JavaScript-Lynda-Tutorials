//This is the "Strings" video tutorial from the "Introducing the JavaScript Language" series. 

"This is a string"
"12"
12;

'This is also a string';
'This is a string"; 
//this above code results in an error--you must end strings with the same designator as you started.

'<a href="">';
'<a href="http://example.com">';

"This is Joe's favorite string";
"This is Joe's "favorite" string";
//we need to use escaping in order for the above code to work.
"This is Joe's \"favorite\" string";

var myString = "This is my string. Leave it alone"; 
//We created a string and then used additional information (length) in order to discern more information about the string. 
myString.length;

//Now we are going to create an uppercase function for the variable, below. 

myString.toUpperCase();

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values,_variables,_and_literals
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String


