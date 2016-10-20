//This is the "While loops" video tutorial from the "Introducing the JavaScript Language" series. 

// for loop
for (var i = 0; i < 10; i++) {
    console.log(i + '... This will go until we hit 10');
}

// same thing as a while loop. Defines variable outside and then uses while to create stopping point, followed by iterating on number.

var i = 0;
while (i < 10) {
    console.log(i + '... This will go until we hit 10');
    i += 1;
}

//You use a while loop generally when you don't know how many times you need to loop over something.
//The below code will pop off the last value and keep doing so until it hits the false value. 

var myArray = [true, true, true, false, true, true];
var myItem = null;
while (myItem !== false) {
    console.log('myArray has ' + myArray.length + ' items now. This loop will go until we pop a false');
    myItem = myArray.pop();
}

//you need to be careful of creating an infinite loop, example below. It will crash your browser.

counter = 1;
while (true) {
    console.log(counter);
    counter++;
    break; //comment out this break to make this loop go forever. 
}

//now let's change the myItem variable to false, when executed nothing happens since condition is satisfied.

var myArray = [true, true, true, false, true, true];
var myItem = false;
while (myItem !== false) {
    console.log('myArray has ' + myArray.length + ' items now. This loop will go until we pop a false');
    myItem = myArray.pop();
}

//if you want to make sure block is executed at least once, need to use DO
//notice do is entered into where while statement was placed and while is at end. 
//code will now execute the block at least once. 
var myArray = [true, true, true, false, true, true];
var myItem = false;
do {
    console.log('myArray has ' + myArray.length + ' items now. This loop will go until we pop a false');
    myItem = myArray.pop();
} while (myItem !== false);


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/while
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/do...while