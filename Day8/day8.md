# MISSION 10 # -> LOCAL STORAGE BASICS ->
Duration -> 20 min

- It is a web storage object which are not sent to server with each request. 
- It is used to store data fpr particular domain in your browser.
- data services a full page refresh and even a full browser restart

# Methods ->
1. setItem(key,value) ->
- Set key/value pair
- Eg -localStorage.setItem("name","Alfiya  ")

2. getItem(key) ->
- get the value by key
Eg -localStorage.getItem(key)

3. removeItem(key) ->
- remove the key with it's value
Eg -localStorage.removeItem(key)

4. clear() ->
- delete everything
Eg -localStorage.clear()

5. key(index) ->
- get the key on a given position
Eg -localStorage.key(index)

6. length->
- the number of value stored in it.
Eg -localStorage.length

# Impt Points ->
1. Keys and values bith must be string,
2. We can use the 2 json methods to store objectd in localStorage

a. json.stringfy(object) -> convert object to string
b. json.parse(string) -> convert string to object

## MILESTONE 3 COMPLETED ##


# Target 4 -> React.js Frontend Development #

## Misison 11 -> Introduction to react and jsx
-> Duration -> 1 hour

>> What is react? ->

1.React is a Js library used to create UI(user-interface). 
2.React has component based  architecture.

components->function  ->reusable peice of code 
  |
custom html element   

js->imperative approach.(u have to tell have everything step by step or line by line.)
->focuses on describing how to perform tasks using step-by-step instructions.

React->Declarative approach-> u have to tell end state only.
->you describe what the UI should look like, and React handles how to update it efficiently

SPA->Single page application   
->a web app that loads a single HTML page and dynamically updates content without refreshing the page.

>> Introduction to jsx ->
javascript xml (html code inside js )
jsx code ------> js code 
        es-build


App->default component

 Custom Components-> 1.Components folder
                       2.Name the component in pascal case.
                       3.export the component
                       import the component in app.jsx file.
                       4.make a css file for that particular component with the same name as component name. (import the css file int that particular component) 

>> How virtual dom works ->
What is the Virtual DOM?
- A lightweight copy of the real DOM in memory.
- React uses it to track changes and update the real DOM efficiently.
- It is a JavaScript object representing the structure of UI components.

1. Why use Virtual DOM?
Real DOM updates are slow.

2. How does it work?
Render Phase:

JSX → React Elements → Virtual DOM Tree (created using React.createElement).

>> React folder structure->

my-app/
│
├── public/             # Static files like index.html, favicon, images
│
├── src/                # Main source code
│   ├── assets/         # Images, fonts, icons
│   ├── components/     # Reusable UI components (e.g., Button, Card)
│   ├── pages/          # Route-based components/pages (e.g., Home, About)
│   ├── App.js          # Root component
│   ├── index.js        # Entry point (renders <App />)
│   └── styles/         # Global CSS, Tailwind or SCSS files
│
├── .gitignore
├── package.json
└── README.md

# COMPONENTS->
1.Reusable peice of code.
2.Decrease code redundancy.
3.Maintainibility.
4.Seperation of concern.

# PACKAGE.JSON->
Here all the dependencies and scripts are listed.

React->react and react-dom

# main.jsx->
1.Entry point.
2.First jsx file that will be executed.

# App->
1.First component of react.
2.Present in App.jsx. 

main.jsx-> 
1.Takes root div from index.html
2.then react convert root div into rect root
3.root element render app component present in app.jsx.
so index.html render app component present in app.jsx.

main.jsx gets the root div from index.html, converts it into a React root, and renders the App component from App.jsx, which is then displayed in index.html.


                 js- engine
userfriendly code----------> browser friendly code

import-> jahan par usko use kiya hai
export-> jahan par usko create kiya hai  

## Misison 12 : Components, props, state ->
Duration -> 2 hours
>> What is component? ->

- A component is a building block of a React app.
- It is a reusable piece of UI (like a button, header, or card).
- Each component is a JavaScript function or class that returns JSX (HTML-like code).

function ComponentName(){
    return (<div></div>)

}
export default ComponentName;

# EXPORT SYNTAX->
export default ComponentName;


# IMPORT SYNTAX->
import FileName from './Folder/FileName';


# FOR MAKING THE COMPONENT REUSABLE WITHOUT hardcoding->

    const date=16;
    const month="March";
    const year=2025;
    return (
    <div className="mfg-date">
        <span>{date} </span>
        <span>{month} </span>
        <span>{year}</span>
    </div>
    );

>> Functional vs class component -> 

1. Functional Component
- It’s just a JavaScript function.
- Used to show UI based on props.
- Can use hooks (like useState, useEffect) for features like state and lifecycle.

2. Class Component
It’s a JavaScript class that extends React.Component.

Has its own state and lifecycle methods.

Uses this keyword to access props and state.

>> What are props->
properties
For code reusability.
 
We can send following through props->
1.Data
2.whole component
3.function

function ItemDate(props){
    const date=props.day;
    const month=props.month;
    const year=props.year;
    return (
    <div className="mfg-date">
        <span>{date} </span>
        <span>{month} </span>
        <span>{year}</span>
    </div>
    );
}


# 4TH WAY IN APP.jsx->

const response=[
    {
    itemDate:"16",
    itemMonth:"March",
    itemYear:"2025",

    },
    {
      itemDate:"30",
      itemMonth:"April",
      itemYear:"2025"
  
      },
      {
        itemDate:"3",
        itemMonth:"May",
        itemYear:"2025"
    
        }
  ];
  return (
    <div>
    <Item></Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
  );

  # props.children->
  {props.children}
  To make the content visible inside the tag.


# props.className->
It is used to give css style to a component.

 return <button className={props.className}>Click Me</button>;
<Button className="red-button"/>

>> Component lifecycle ->

# MOUNT->
Component dom pe render ho gaya

# UNMOUNT->
Component dom se remove ho gaya hai

# CREATION OF COMPONENTS->
1.Functional based components
2.Class based components 


# LIFECYCLE METHOD IN CLASS BASED COMPONENTS->
1.Componentsdid mount
2.Componentedid update
3.Componentswill unmount


## Misison 13 : -> Handling Events ansd lists

Duration -> 1.5 hour
# HANDLING USER EVENTS ->


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

# Project 1 -> Counter app using react 
Duration -> 45 min

