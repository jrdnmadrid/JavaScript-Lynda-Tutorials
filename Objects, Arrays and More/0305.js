//This is the "Manipulating Arrays" video tutorial from the "Introducing the JavaScript Language" series. 

var counties = [
    'Belknap',
    'Strafford',
    'Carroll',
    'Rockingham'
];
//counties 0 will return Belknap, as it starts from 0. 
counties[0];
counties[2];

//To modify one of the items in the array, use the below.  
counties[2] = 'Cheshire';
counties; //now Carroll will be replaced w/ Cheshire. 

//To add something to the end of the array, use similar notation but choose the number after the last number, which in this case is 3. 

counties[4] = 'Carroll';
counties;

//There are other ways as well to add onto the end, here is an abstraction:

counties[counties.length] = 'Merrimack';
counties; 
//this adds Merrimack to the end of the counties. 

//Another way is the push method, below.

counties.push("Coos");

//To remove something, can use a similar method, called pop. This removes the last entry, in this case Coos. 
counties.pop();
counties;

//You can also do similar actions at the front of an array with shift and unshift
counties.shift();
counties;
counties.unshift();

//to delete things, you can use the delete function, although it will delete the content but leave index space that it occupied. 
delete counties[2];
counties;

//if you want to delete something and remove its place, use splice. Splice defines where to start and how many to delete. EX (1, 1) means delete second item, and only one item. 

counties.splice(2, 1);
counties; 

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array