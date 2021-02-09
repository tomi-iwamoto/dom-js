//NOTES ON HOW TO MANIPULATE THE DOM

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

//To add content to this new element & to style it:
div.innerText = "I am a new div!"

//You can also use .textContent and get the same results as innerText but it will appear differently from it. It will make it look exactly the same as you presented it in the HTML document including the indentation etc.  
div.style.backgroundColor = "aqua";
div.style.margin = "20px";
div.style.padding = "10px";





const section = document.createElement('section');
body.append(section);
section.style.backgroundColor = "green";
section.style.margin = "20px";
section.style.padding = "10px";
section.style.color = "white";

//If you want to style it as html you can use innerHTML-- this is the only way that you can add an HTML element into an element in JS
//innerHTML can pose security issues. 
section.innerHTML = "<strong>innerHTML can use html tags</strong>";

//A more secure way to do this:
const strong = document.createElement('strong');
strong.innerText = "---Using innerText instead of innerHTML is more secure";
section.append(strong);





//USING ELEMENTS IN THE HTML
const firstDiv = document.querySelector('div');
const hi = document.querySelector('#hi');
const bye = document.querySelector('#bye');

//If you want to remove an element in the html document. Use the remove() function.
bye.remove();

//If you want to add it back:
firstDiv.append(bye);

//When you want to access ATTRIBUTES 
hi.getAttribute('id');

//if you console.log this you can see it in the console
console.log(hi.getAttribute('id')); 

//But then you can always just do:
console.log(hi.title);

//You can also set the attribute to a certain value: the first parameter is the name of the attribute and the second is the value
console.log(hi.setAttribute('class', 'new'));

//You can also change the id by simply"
console.log(hi.id = 'newId');

//You can also remove the attribute:
hi.removeAttribute('id');





//HOW TO GET THE DATA ATTRIBUTE
//Use the property called "dataset" -- which contains all of your custom data attributes
hi.dataset

//This will log on to the console as "Good Day!" as it is written in the HTML 
console.log(hi.dataset);

//If I want to specify which data property I want to get:
//Make sure to camelcase your data name if it is more than one word
console.log(hi.dataset.secondGreeting);

//If I want to set a new property 
hi.dataset.newName = "new-name";





//HOW TO GET ALL THE CLASSES OF AN ELEMENT

//In order to add a class:
bye.classList.add("new-class");

//You can also remove a class:
bye.classList.remove("bye");

//You can also toggle - which will remove it if it has it already or add it if it doesn't
bye.classList.toggle('goodbye');

//You can add a boolean value -- it will automatically remove it if we pass false, if we pass true it will add it
bye.classList.toggle('goodbye', true);