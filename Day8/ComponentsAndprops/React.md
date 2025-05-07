# LECTURE -2->

# EVENT HANDLING->
In react event handling is done using props.
1.by using on
2.Giving handler as prefix to the function name

Eg->  <button onClick={ClickHandler}>Add to cart</button> 
function ClickHandler(){
  console.log("Button clicked");
}

# CHANGE  IN UI->  

# STATE->
When we update the value of a variable it re-render the page.


# USESTATE->
useState->react hook-> utility functions from which u can do different things. 
state->per component instance basis.


1.import useState from react  ->{useState}
2.Syntax->

useState(input)->
1.input-> form which value you want to initialize it.
2.output->It returns an array of 2 things->
a.value of the variable
b.function to update the value of that variable

EG->
const [title,setTitle] = useState(props.title)

function clickHandler(){
setTitle("Added to cart");  
console.log("Button clicked");
}

click->onClick prop->clickHandler function ->title="Added"
click->onClick prop->clickHandler function->setTitle->1.changes value to popcorn.
                                                      2.renders the page
 
** In React, even though title is declared as const, its value can change because useState provides a setter function (setTitle) that updates the state.

** WE ARE USING CONST BECAUSE->
The reference to title never changes – useState updates the value but does not reassign the variable.
Using let is unnecessary – useState provides a new value on re-render, so const is sufficient.


** The setState function in React (setTitle in your case) is scheduled, not immediate.

** IT IS SCHEDULED BECAUSE->
1.improve performance 
2.avoid unnecessary re-renders.


** ->  JSX follows XML syntax, which requires self-closing tags for elements that don’t have content.

Eg-> <br />


** function titleChangeHandler(event) {
    console.log(event.target.value);
}


This is a JavaScript event handler function that does the following:

1.It takes an event object (event) as an argument.
2.event.target refers to the HTML element that triggered the event (e.g., an <input> field).
3.event.target.value gives the current value of that element.
4.It logs the value to the console.

>What is an Event in JavaScript?
An event in JavaScript is any user interaction with a webpage, such as:
✔ Clicking a button (click)
✔ Typing in an input field (input / change)
✔ Moving the mouse (mousemove)
✔ Submitting a form (submit)

JavaScript listens for these events and allows us to run custom functions when they occur.

When an event happens (like typing in an input field), JavaScript automatically passes an event object to the event handler function.

🔹 event.target → Refers to the element that triggered the event (like an <input>)
🔹 event.target.value → Gets the current value of that input field


> Why is event.preventDefault() used?
By default, when you submit a form, the browser reloads the page.
Using event.preventDefault(); stops this behavior so you can handle the form submission manually.


# LIFTING THE STATE UP->
           App

child 1            child2

No 2 child component communicate directly to each other they communicate via parent component.

** parent component communicate with child component via props.

** child component communicate with parent component via props function.

            function passed
   Parent     to child         Child
function(obj)--------------->function call with input parameters(obj)----->function gets accessed in parent

->In app.jsx->
function printProductData(data){
  console.log(data);
}

->Making prop->
<NewProduct printProduct={printProductData}>

Each level-> handler and prop is passed.
Last level-> only prop is called.


> new Date(year, month, day) 

