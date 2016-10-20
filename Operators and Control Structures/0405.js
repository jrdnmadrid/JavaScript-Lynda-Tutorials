//This is the "Conditionals: Switch" video tutorial from the "Introducing the JavaScript Language" series. 


//This in one way, but there is another way with a switch statement.
var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK');

if (answer === 'YES') {

    console.log('You said YES!');

} else if (answer === 'MAYBE') {

    console.log('You said maybe. I don\'\t know what to make of that')

} else if (answer === 'NO') {

    console.log('You said no. :(');

} else {

    console.log('You rebel, you!');
}

//switch statement method is below. A couple things:
//Default is equivalent to else. 
//You set up case blocks instead of if statements. 
//Break exits you out of switch statement. If you don't include break, execution will cascade down. 

var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK');

switch (answer) {

    case "YES":

        console.log('You said YES!');
        break;

    case 'MAYBE':

        console.log('You said maybe. I don\'t know what to make of that.');
        break;

    case 'NO':

        console.log('You said no. :(');
        break;

    default:

        console.log('You rebel, you!');
}


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch