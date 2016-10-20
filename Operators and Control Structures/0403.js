//This is the "Logical Operators" video tutorial from the "Introducing the JavaScript Language" series. 


//Defining variables for execise
var anima1 = 'monkey';
var animal2 = 'bear';
var animal3 = 'tiger';

//The AND in JavaScript is && and the OR is ||. Now to use w/ variables.

animal1 === 'monkey' && animal2 === 'bear'; //true
animal1 === 'ape' && animal2 === 'bear'; //false
//AND will only return true if all conditions are met. 

animal1 === 'ape' || animal2 === 'bear'; //true
//OR will return true if one condition is met. 

//You can combine AND OR in one statement, AND always evaluated first.
animal1 === 'monkey' || animal2 === 'bear' && animal3 === 'tiger'; //true

//To make things easier to determine which goes first, you can use parentheses.
(animal1 === 'ape' || animal2 === 'monkey') && animal3 === 'tiger'; //this would be false b/c both animal1 and animal2 are not correct.

//You can use the ! to make something NOT. 

!(animal1 === 'monkey' && animal2 === 'bear'); //this whole thing is not true.


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators