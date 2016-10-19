//This is the "Arrays" video tutorial from the "Introducing the JavaScript Language" series. 

var myArray = [];
myArray;
//use square brackets for arrays instead of curly braces

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
//Now I've defined the array. An array preserves the order you designated and keys assigned starting with 0. 

var myArray = [
    0, 1, 2,
    'string1', 'string2', 'string3',
    true, false
];
myArray;

//let's take another example, say you wanted to store counties for another area, see below: 

var counties= [
    'Belknap',
    'Strafford',
    'Carroll',
    'Rockingham'
];

counties
['Belknap', 'Strafford', 'Carroll', 'Rockingham']

//Arrays can contain many different types of information, including objects anod other arrays. Let's do another example below.

var arrayOfStuff = [
    { 'name': 'value' },
    [1, 2, 3],
    true,
    'nifty'
];
arrayOfStuff;

//Can also look at how long the array is with the below.

arrayOfStuff.length;

//The answer is 4, and counts the objects within. 

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values%2C_variables%2C_and_literals#Array_literals
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array