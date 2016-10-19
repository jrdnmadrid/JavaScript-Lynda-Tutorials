//This is the "Readability: Whitespace" video tutorial from the "Introducing the JavaScript Language" series. 


var year=2012, month='October', day = 31,holiday='Halloween';

var tinyAlmanac = {'year':2012, 'month':'October','day':31,'holiday':'Halloween'};

//These above declarations do work, but are difficult to read. Let's add whitespace. 

var year = 2012, month = 'October', day = 31, holiday = 'Halloween';

//lets take it a step further and separate out by a line for each, or also align assignment equal signs. 
var year    = 2012,
    month   = 'October',
    day     =  31,
    holiday = 'Halloween';


var tinyAlmanac = {
    'year' : 2012,
    'month' : 'October',
    'day' : 31,
    'holiday' : 'Halloween'
};



// More info: 
// These are not specifications on whitespace, but the Mozilla recommended coding style concerning whitespace.
// https://developer.mozilla.org/en-US/docs/Developer_Guide/Coding_Style#Whitespace