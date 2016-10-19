//This is the "Objects and references" video tutorial from the "Introducing the JavaScript Language" series. 

var animal = {
    'genus': 'bird',
    'species': 'raven',
    'callType': 'squawky',
    'quote': "Nevermore",
    'maxOffspring': 5,
    'noisy': true,
    'deadly': false
};
animal;

//We will make a separate object (animal2) that takes references from the class of animal 
var animal2 = animal;
animal2;

animal2.genus = 'bear';
animal2;

//animal2 genus has now been changed to bear, but what happens to animal?

animal;

//animal also gets changed to bear. Both variables point to the same value. 

//If we want to make a copy of animal, we would just make a separate copy, as below. 

var animal2 = {
    'genus': 'bird',
    'species': 'raven',
    'callType': 'squawky',
    'quote': "Nevermore",
    'maxOffspring': 5,
    'noisy': true,
    'deadly': false
};
    //now let's modify animal2. You will notice that animal stays as bear, while animal2 is now a bird. 

animal2.genus = 'bear';

//when you execute a reference statement, it changes both references. To create a copy, use var if you need to branch the object. 

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object