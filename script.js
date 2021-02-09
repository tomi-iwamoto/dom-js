//HOW TO ADD ELEMENTS

const body = document.body;

//.append() - will allow me to add strings and multiple strings
body.append('I am a string!');

//.appendChild() - will only allow me to add elements. 


//HOW TO CREATE ELEMENTS

const div = document.createElement('div');

//The above will only create the element but now place it in the DOM
//In order to add this new element you must append it to the body:

body.append(div);

//To add content to this new element:

div.innerHTML = "I am a new div!"

