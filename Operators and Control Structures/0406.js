//This is the "Terse ifs: one-liners and the ternary operator" video tutorial from the "Introducing the JavaScript Language" series. 

//The below is a one liner, you could put console on the same line or right below and it would run.
var cherub = 'Cupid';

if (cherub === 'Cupid') console.log("Ouch, an arrow! Ooo, I'm in love!");

//OR

if (cherub === 'Cupid')
    console.log("Ouch, an arrow! Ooo, I'm in love!");

//the below would also work. Problem is only the first line after if statement will be executed. 
//if you want multiple lines after if to be executed, need to have curly braces. 

var cherub = 'Cupid';

if (cherub === 'Cupid')
    console.log("Ouch, an arrow! Ooo, I'm in love!");

else
    console.log("I feel nothing!");

//single variable example:

var wantForChristmas = 'puppy',
    gotForChristmas = 'puppy',
    cryAboutIt = false;

if (wantForChristmas === gotForChristmas) {

    console.log('Yay! The little children are so pleased!');
    cryAboutIt = false;

} else {

    console.log('Oh no! Sad Christmas!');
    cryAboutIt = true;

}
//You will often see entire expressions collapsed down into a single variable. This if statement goes on top of the previous else.
if (cryAboutIt) {
    console.log('Child says: WAAAAAAAAAAAA');
}


//ternary operator. The ? statement means if and colon : means if not in the below code. So if you entered in anything other than cat, it will produce the second console.log.

var animal = 'cat';
animal === 'cat' ? console.log('You will be a cat herder') : console.log('You will be a dog catcher');

//this clarifies what job you plan on having, cat herder or dog catcher, based on what the animal variable states. 
var job = (animal === 'cat' ? 'cat herder' : 'dog catcher'); 

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#if...else_Statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/JavaScript/A_re-introduction_to_JavaScript#Other_types
//
// https://developer.