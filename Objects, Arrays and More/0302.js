//This is the "Manipulating objects" video tutorial from the "Introducing the JavaScript Language" series. 

var animal = {
    'genus': 'bird',
    'species': 'raven',
    'callType': 'Squawky',
    'quote': 'Nevermore',
    'maxOffspring': 5,
    'noisy': true,
    'deadly': false
};

animal.quote; //this works
animal.'quote'; //this does not work, do not use quotes with above style. 
animal["quote"]; //same thing as above animal.quote, but using a different syntax that uses quotes. 

animal.color = 'black';
//this adds a type color property of black to the animal. 
animal;

animal["where it lives"] = 'in a tree';
//or you can use other notation without spaces, as below. 
animal.whereItLives = 'in a tree';

//to remove a property, use delete keyword
delete animal.color; 
animal; 

var emptyObject = {};
emptyObject.isItReallyEmpty = false; //This will add an object of is it really empty to the empty object. 


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object
