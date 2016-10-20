//This is the "Conditionals: if" video tutorial from the "Introducing the JavaScript Language" series. 

//The below code brings up a window, and depending on answer gives you true or false. 
var answer = window.confirm('Click OK, get true. Click cancel, get false.');


//if we add the if statement to the above, it runs after you click OK. 
if (answer === true) {
    console.log('You said true!');
} else {
    console.log('You said something else'); 
}
//The else code will choose a separate response to the if code. 

//now, let's look at else if. Each line will run an else statement. You can leave off these as well and just have YES/NO.

var answer = window.prompt('Type YES, NO or MAYBE. Then click OK.');

if (answer === 'YES') {

    console.log('You said YES!');

} else if (answer === 'MAYBE') {

    console.log("You said maybe. I don't know what to make of that.");
}
else if (answer === 'NO') {

    console.log('You said no. :(');
}
else {
    console.log('You rebel, you!');
}




// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators