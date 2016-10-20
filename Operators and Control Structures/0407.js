//This is the "Type checking" video tutorial from the "Introducing the JavaScript Language" series. 

var thing = 12;
//if you declare a variable in JS and then want to redeclare it, that is fine.
thing = 'twelve';

typeof thing; //would return "string". 

thing = 12;

typeof thing; //would return "number"

thing = false;

typeof thing; //would return "boolean"

thing = {};

typeof thing; //would return object

thing = []; //change into array

typeof thing; //it would return object, even though they are different.

//if we want to check whether it is array. Hasownproperty can check it has an own property, length property are exclusive to array. 

typeof thing === 'object' && thing.hasOwnProperty('length'); //this would return false. 

typeof NaN; //returns number, so do not use it.

typeof null; //returns null, so don't use this.

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof