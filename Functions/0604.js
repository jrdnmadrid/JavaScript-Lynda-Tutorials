//This is the "Objects, references and functions" video tutorial from the "Introducing the JavaScript Language" series. 

// Here is the calvin object
var calvin = {
    'name': 'Calvin',
    'bestfriend': 'Hobbes',
    'form': 'human boy'
};

// Here is the function of the transmogrifier. 

function transmogrifier(calvin) {
    if (typeof calvin !== 'object') {
        console.log('argument is of the wrong type');
        return; 
    }

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    switch (randomNumber) {
        case 1:
            calvin.form = 'tyrannosaurus';
            break;
        case 2:
            calvin.form = 'grey wolf';
            break;
        case 3:
            calvin.form = 'bengal tiger'
            break;
        case 4:
            calvin.form = 'grizzly bear';
            break;
        case 5:
            calvin.form = 'canary';
            break;
        default:
            // do nothing --he stays human
            break;
    }
}

// The transmogrifier automatically changes the object, what if we wanted it to make a copy instead? Add var newform, shown below. 

function transmogrifier(calvin) {
    if (typeof calvin !== 'object') {
        console.log('argument is of the wrong type');
        return;
    }

    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var newForm = calvin.form; //by default, do not change. This makes a copy of object
    switch (randomNumber) {
        case 1:
            calvin.form = 'tyrannosaurus';
            break;
        case 2:
            calvin.form = 'grey wolf';
            break;
        case 3:
            calvin.form = 'bengal tiger';
            break;
        case 4:
            calvin.form = 'grizzly bear';
            break;
        case 5:
            calvin.form = 'canary';
            break;
        default:
            // do nothing --he stays human
            break;
    }
    //return a new object that's just like Calvin but transmogrified
    //this return gives a new copy, instead of modifying object. 
    return {
        'name': calvin.name,
        'bestFriend': calvin.bestfriend,
        'form': newForm
    };
}


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function