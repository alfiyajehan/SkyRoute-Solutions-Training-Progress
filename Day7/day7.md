# IN BUILT OBJECTS ->
Duration -> 30 min

1.Math->properties for mathematical function and constants.
Math.random()->generates a random number
Math.PI->print the value of pi.
Math.round()->round off the value.
Math.max()->maximum number.
Math.min()->minimum number.

 # STRINGS->
In js strings are of 2 types
1.primitive type
let lastName='Jehan';

2.object type
let firstName=new String('Alfiya');


# CONVERSION OF PRIMITIVE STRING TO OBJECT STRING->
objectName.methord()-> js automatically treats it as a object string type.

eg-> lastName.length
     lastName[3]
     lastName.includes('an')
     lastName.startsWith('J')
     lastName.endsWith('n')
     lastName.indexOf('n')
     lastName.toLowerCase()
     lastName.trim()
     lastName.replace('Je','ae')

let s='This is my string.';
s.split(' ')
s.trimStart()
s.trimEnd()

# TYPEOF->
typeof()->
The typeof operator in JavaScript returns a string indicating the data type of the operand.


-> ESCAPE SEQUENCES->
Escape Sequences in JavaScript allow you to represent special characters in strings that are difficult to include directly. They are preceded by a backslash (\).
\n - Newline
\t - Tab
\' - Single quote
\" - Double quote
\\ - Backslash
\r - Carriage return
\b - Backspace
\f - Form feed
\u - Unicode character 

# TEMPLATE LITERAL->
A template literal in JavaScript is a way to define strings using backticks (`), allowing for interpolation and multi-line strings.

Interpolation in JavaScript refers to the process of embedding expressions (such as variables or calculations) directly into a string. This is done using ${} inside template literals (strings wrapped in backticks).


-> DATE AND TIME->
console.log(date);


# GETTER AND SETTER->

Getter: Retrieves the value of a property.
Setter: Sets or updates the value of a property.

# ARRAY INSERTION->
Duration -> 1 hour
1.Insert element at the end of array 
arrayName.push(element);

2.Insert element at the beginning of array 
arrayName.unshift(element);

3.Insert element at the mid of array 
arrayName.splice(index,delete,elements);


# SEARCHING AN ELEMENT IN THE ARRAY->
console.log(numbers.indexOf(element));

if position is shown then it is present and if -1 is shown then it is not present in the array.


OR

IF ELSE->

if(numbers.indexOf('3')!=-1){
    console.log('It is present at index '+ numbers.indexOf('a'));
}
else{
    console.log('It is not present.')
}

OR

INCLUDES-> 
console.log(numbers.includes('c'));

OR

DEFINING FROM WHERE WE NEED TO SEARCH->
console.log(numbers.indexOf('d',3));     


# SEARCHING FOR REFERENCE TYPE STRINGS->

let courses = [{no:1, naam: 'Love'},{no:2, naam: 'Rahul'}];
console.log(courses);
courses.indexOf({no:1, naam: 'Love'});  

The reason courses.indexOf({no:1, naam: 'Love'}) does not return the index, that is in JavaScript, objects are compared by reference, not by value.

In indexOf, the comparison checks whether the object in the array is the exact same object (i.e., the same memory reference) as the one you pass.
{no:1, naam: 'Love'} in indexOf is a new object with the same structure and values as the object in the array but stored at a different memory address. Thus, they are not considered equal.

# CALLBACK FUNCTION->
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
Syntax->
array_Name.find(predicate function)


CALLBACK FUNCTION BY ARROW FUNCTION->

# ARROW FUNCTION->
1.remove function keyword.

let course=courses.find((course){
    return courses.naam==='Love';
})
2.add arrow

let course=courses.find((course)=> {
    return courses.naam==='Love';
})

3.if we have single input parameter then we will remove the parenthesis.

let course=courses.find(course=> {
    return courses.naam==='Love';
})

4.if we have single line of code then we will remove the curly parenthesis and  return keyword.

let course=courses.find(course=> 
 courses.naam==='Love';
)

5.Bring all the code in single line and remove semicolon.

let course=courses.find(course=> courses.naam==='Love');

# REMOVING ELEMENT->

end -> pop
beginning-> shift
middle->splice

# EMPTYING AN ARRAY

let newNum1=[1,2,3,4,5,6,7];
let newNum2=newNum1;

numbers=[];

console .log(newNum1);
console.log(newNum2);


In this newNum1 has no elment but newNum2 is still having all the element , so to empty an array we use 2 methords-


 newNum1.length=0;

 console .log(newNum1);
 console.log(newNum2);

 OR

newNum1.splice(0,newNum1.length);
console.log(newNum1);


# COMBINING AND SLICING AN ARRAY->

-> COMBINING(concat)
let first=[1,2,3];
let second=[4,5,6,7];

let combined=first.concat(second);
console.log(combined);

-> SLICING(slice) ->
                         (included)        (excluded)
let sliced=combined.slice(starting index, ending index);
console.log(sliced);

In the slice funtion the ending index is the previous index than the ending index.

FULL SLICING->

combined.slice();

->SPREAD OPERATOR   

let third=[10,62,3];
let fourth=[4,45,96,37];

let spreadCombined=[...third,...fourth];
console.log(spreadCombined);

let spreadCombined=[...third,'a','b','c','d','e','f', ...fourth];
console.log(spreadCombined);


# ITERATING AN ARRAY->

-> USING FOR OF
for(let keys of marks){
    console.log(keys);
}

-> USING FOR EACH
marks.forEach(function(number){
    return console.log(number);
})

OR
marks.forEach(number=> console.log(number));


->FOR IN LOOP
//FOR IN LOOP
for(let keys in marks){
    console.log(keys);
}


# JOINING AN ARRAY-> returns a string
let arrJoin=[1,2,3,4,];
let ansJoin=arrJoin.join(',');
console.log(ansJoin);

SPLITING A STRING->
After spliting an array the splitted array will be an array.

let stringSplit='This is my first message.';
let arrSplit=stringSplit.split(' ');
console.log(arrSplit);

# SORTING AN ARRAY->
It arranges the element in ascending order.

let sortNum=[40,30,10,20,50];
let arrSort=sortNum.sort();
console.log(arrSort);

REVERSING AN ARRAY->

let reverseArr=arrSort.reverse();
console.log(reverseArr);


# FILTERING AN ARRAY-> 
let int=[1,2,-1,-4,6,7,-5];

let filtered=int.filter(v=> v<0);
console.log(filtered);


MAPPING AN ARRAY->
Mapping each element of array to something else.

let mapArr=[7 ,8,9,10]; 

let ansMap=mapArr.map(v=>'student no. '+v );
console.log(ansMap);


MAPPING WITH OBJECTS

let mapObj=[1,2,-6,-9];
let filterMapObj= mapObj.filter(v=> v>=0);
console.log(filterMapObj);

let items=filtered.map(n=> {value : n});


CHAINING->

let mapObj=[1,2,-6,-9];
let items=mapObj.filter(v=> v>=0).map(n=> {value : n});


Insertion: Results in an array.
Searching: Returns a single element, index, or a boolean, depending on the method.
Removing: Results in an array or removed element(s), depending on the method.
Combining: Results in a new array.
Slicing: Results in a new array.
Joining: Results in a string.
Splitting: Results in an array.
Mapping: Results in a new array.
Filtering: Results in a new array.
Sorting: Modifies the original array and returns it (still an array).
Reversing: Modifies the original array and returns it (still an array).


The split() method is only applicable to strings in JavaScript.

# REDUCING AN ARRAY->
arrName.reduce(callbackFunction,0);
let totalSum=reduceArr.reduce((accumulator,currentvalue) => accumulator + currentvalue,0);

Accumulator->total value
currentvalue=value


# FUNCTIONS-> 

Duration -> 45 min
A block of code that perform a specific task.
We need function for reusability.

# CREATION A FUNCTION->

1.Normal function declaration 

function functionName(input parameters){
    code;
}
The function call runs in both situations that is above the function or below the function.

2.Function assignment
The function call runs below the function only.

a.Named Function assignment
let stand=function walk(){
    console.log('walk');
};

b.Anonymous Function assignment

let stand2=function(){
    console.log('walking');
}
stand2();

 
#INVOKING A FUNCTION->

run(); //invoke


# HOISTING ->
Hoisting in JavaScript is the default behavior where variable and function declarations are moved to the top of the file during the compilation phase.
->Done automatically by the js engine.

# SPECIAL OBJECTS IN JS->ARGUMENTS
In JavaScript, the arguments object is a special array-like object available inside all non-arrow functions, which contains all the arguments passed to the function, even if they're not explicitly defined in the function's parameter list. 

function sum(a,b){
    console.log(arguments);
    return a+b;
}


# REST OPERATOR->the result will be an array
function sum(...args){
    console.log(args);

}
sum(1,2,3,4,5,6,7,8,9,10);

# DEFAULT PARAMETERS->
Default parameters in JavaScript allow you to specify default values for function parameters if no argument is provided when calling the function.
After first default parameter all the parameter is treated as default parameter.

function interest(p,r=6,y=10){
    return p*r*y/100;
}

console.log(interest(1000));

# ERROR HANDLING->

->TRY AND CATCH->

let person={
    fName:'Alfiya',
    lName:'Jehan',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
      if(typeof value !== String){
        throw new Error('You have not entered a string.');
      }
      let parts=value.split(' ');
      this.fName=parts[0];
      this.lName=parts[1];
    }
};
try{
    person.fullName=true;
    console.log(person.fName);
}

catch(e){
    alert(e);
}

# SCOPE->

let->It has scope for the nearest code block.
var->It has global scope.
var->The function in which it is defined and if it is not defined in the function the it has scope in the whole file. 

# MISSION- 8 #

# DOM MANIPULATION ->
Duration -> 15 min

# WINDOW->
->It is a global object.
->It is created by browser.
->It represents browser window.
->To control the browser window.

Window->
1.Dom
2.Bom
3.Js core functionality


# DOM (DOCUMENT OBJECT MODEL)->Tree like structure

->html webpage-> covert to js object->document(model->dom)
               (tokenizer)
->character -> tags -> token -> nodes -> Dom

# BOM(BROWSER OBJECT MODEL)->
It allows js to talk to browser on other matter other than content of page.

# FETCH ELEMENT->

1.getElementById()->
->It returns an element object representing the element whose id property matches the specified string.
->SYNTAX->
document.getElementById('id'); 

->It is called on document object.
->It returns a single object(id's are always unique).

2.getElementsByClassName('className')->
->It is called on document object.
->It returns an array-like(HTML collection) object of all child elements of the specified class.
->It returns multiple items.

3.getElementsByTagName('tagName')->
->It is called on document object.
->It returns an array-like(HTML collection) object of all elements of the specified tag.
->It returns multiple items.

# TRICK->
$0->
->It is used to get the last DOM element you clicked on in the "Elements" tab of DevTools.

## TASK -1 ## -> Dom Selectors

# QUERY SELECTOR->
It returns a single object.

# ID->
document.querySelector('#id')

# CLASS->
->document.querySelector('.class')
->Multiple ke case mein ->first wala element return karega

# TAG->
->document.querySelector('<tag>')
->Multiple ke case mein ->first wala element return karega

# QUERY SELECTOR ALL->
->It returns a multiple object.
->It returns a nodelist.
document.querySelectorAll('.class')

## Task -2##
Duration -> 45 min

# CHANGING TEXT, STYLE DYNAMICALLY ->
1.Innerhtml->
-> It takes string as an input.
->gets an element and all it's decendant.
->set an element's tag and html content.
->It render the tags.

let codingEx=document.querySelector('.code-example);
console.log(codingEx);

2.Outerhtml
-> It takes string as an input.
->gets or sets the entire HTML, including the element itself and its content.

<div class='box'>
    <h1>hello</h1>
    <p>lorem</p>
</div>

box.innerHTML = "<h4>this is h4 tag</h4>"
<div class='box'>
    <h4>this is h4 tag</h4>
</div>

box.outerHTML = "<h4>this is h4 tag</h4>"
<h4 class='box' >this is h4 tag</h4>

3.Textcontent->
-> It takes string as an input.
->get html content.
->set the html tag(treat tag as content and does not render it while printing) and content. 
->It treats tags as content.
->It dispay the content which is define hidden.

4.Innertext->
-> It takes string as an input.
->get or set the text content.
->It does not dispay the content which is define hidden.


# ADDING NEW ELEMENT->
->It is added at the end of the tag.
# CREATE ELEMENT->
->It is called on document object.
->To create a new element.
->document.createElement();

# ADD ELEMENT->
->It is called on tag where we want to add the element.  
->To add a new element.
.appendChild()


# CREATING TEXT NODE->
->It is called on document object.
->document.createTextNode();

1.At the end
let para1=document.createElement('p');
para1.textContent ="I'm the text node";
codingEx.appendChild(para1);

2.At predefined position->
->insertAdjacentHTML()
->It is called on tag where we want to add the element.
->It has to be called with 2 arguments.
1.Location at which you want to insert.
beforeBegin->previous sibling
afterBegin->first child
beforeEnd->last child
afterEnd->following sibling

2.Html content that you want to insert.

let textNode=document.querySelector('.footer-nav-heading');
let newText=document.createElement('h3');
newText.textContent='Hii';
textNode.insertAdjacentElement('beforeBegin',newText);

#REMOVE CHILD->
->Should know the parent of the element.
->The child that you want to remove.

parent.removeChild(child);

->The drawback of this is we need to know the parent element.


OR  
->childElement.parentNode->property

#CHANGES IN STYLE SHEET->


1.Style
2.Css text
3.set attribute
4.class name
5.classlist

->The style property refers to the inline style of an element, not an external stylesheet.

1.STYLE->
let content=$0;
content.style.color='red';
 
2.CSSTEXT->
let content=$0;
content.style.cssText='color:red; background-color:black; font-size:3em';

3.SETATTRIBUTE->
->It is used to add id, class or to style a particular element.
content.setAttribute('style','color:red; background-color:white');

4.CLASSNAME->
->It results a list of class name.
->It returns a string.

let content=$0;
content.className;

5.CLASSLIST->
-.Returns a list of all class names of an element as a DOMTokenList (not an array but similar).
->It returns an array like object(object) of class name.

->.contains('className')
->It will return true if a particular element is present .

.toggle('className')
->Remove if a particular element is present if a particular element is not present it add it.

->.add('className')
->Adds a class to the element.

->.remove('className')
->Removes a class.

# MISSION 9 #

## TASK 1 -> ADD EVENTLISTENER ##
Duration -> 1 hour

# BROWSER EVENTS->(invisible)
click
scroll
dblclick
  
# monitorEvents()->
->To see when an event is triggered.  
->Eg-monitorEvents(document)


# unmonitorEvents()->
->Stop monitoring the events.
->Eg-unmonitorEvents(document)

# EVENTLISTENER->
->action performed on an event
class->blueprint
object->real 

# EVENTTARGET->
->interface->blueprint in js
->It is an interface implemented by objects that can receive events and may have listener(after receiving that event how to respond to it).

->addEventListener()
->removeEventListener()
->dispatchEvent()


HTML file(set of characters) ---->tags------>tokens------->nodes--------->dom
->Node inherit from event target(jo bhi method n properties event target ke paas hongi vo node ke paas bhi hongi).
->Element has properties of both node and eventttarget

eventTarget----------->node----------->element
                 (inherits form        ( inherits from node)
                  eventtarget )    


# ADDEVENTLISTENER-> 
->Respond to events
-><eventtarget>.addEventListener(event,callback function(){}) ;
eventtarget->component


->In JavaScript's style object, hyphenated CSS properties are written in camelCase (backgroundColor, fontSize, etc.).

# REMOVE EVENTLISTENER ->
Works when
->same event type
->same target
->same function  

#== ->It allow type cohesion(covert the values being compared to same data type then comparing the values.)
#===->It prevent type cohesion

->For removing an event listener we need to pass the same function(having same value and stored at same memory location).


# DISPATCHEVENT->
->dispatchEvent is used to manually trigger an event on an element, as if the user interacted with it.
->btn.dispatchEvent(new Event("click"));

# LIFECYCLE OF AN EVENT->
#PHASE OF AN EVENT->
1.Capturing phase(finding the target element)->
->eventtarget.addEventListener(event,callback function,true);

2.At target phase->
->btn.addEventListener("click", function() {
    console.log("Button clicked (Target Phase)"); // Runs when event reaches the button
});

3.Bubbling phase(returning back)->
eventtarget.addEventListener(event,callback function,false);

->By default add event listener executes in bubbling phase.
->If we want it to get executed in capturing phase->
eventtarget.addEventListener(event,callback function,true);
useCapture->true ->turn on the capturing phase


# THE EVENT OBJECT->
When an event occurs->an event object is return to the add event listener function.  
let content=document.querySelector('h1');
content.addEventListener("click",function(event){
    console.log(event);
});

->Here event is the parameter it can be named anything.


# THE DEFAULT ACTION->
.preventDefault()
->prevent default action


# TARGET->
console.log(event.target.value);


# BROWSER EVENTS->(invisible)
click
scroll
dblclick
  
# monitorEvents()->
->To see when an event is triggered.  
->Eg-monitorEvents(document)


# unmonitorEvents()->
->Stop monitoring the events.
->Eg-unmonitorEvents(document)

# EVENTLISTENER->
->action performed on an event
class->blueprint
object->real 

# EVENTTARGET->
->interface->blueprint in js
->It is an interface implemented by objects that can receive events and may have listener(after receiving that event how to respond to it).

->addEventListener()
->removeEventListener()
->dispatchEvent()


HTML file(set of characters) ---->tags------>tokens------->nodes--------->dom
->Node inherit from event target(jo bhi method n properties event target ke paas hongi vo node ke paas bhi hongi).
->Element has properties of both node and eventttarget

eventTarget----------->node----------->element
                 (inherits form        ( inherits from node)
                  eventtarget )    


# ADDEVENTLISTENER-> 
->Respond to events
-><eventtarget>.addEventListener(event,callback function(){}) ;
eventtarget->component


->In JavaScript's style object, hyphenated CSS properties are written in camelCase (backgroundColor, fontSize, etc.).

# REMOVE EVENTLISTENER ->
Works when
->same event type
->same target
->same function  

#== ->It allow type cohesion(covert the values being compared to same data type then comparing the values.)
#===->It prevent type cohesion

->For removing an event listener we need to pass the same function(having same value and stored at same memory location).


# DISPATCHEVENT->
->dispatchEvent is used to manually trigger an event on an element, as if the user interacted with it.
->btn.dispatchEvent(new Event("click"));

# LIFECYCLE OF AN EVENT->
#PHASE OF AN EVENT->
1.Capturing phase(finding the target element)->
->eventtarget.addEventListener(event,callback function,true);

2.At target phase->
->btn.addEventListener("click", function() {
    console.log("Button clicked (Target Phase)"); // Runs when event reaches the button
});

3.Bubbling phase(returning back)->
eventtarget.addEventListener(event,callback function,false);

->By default add event listener executes in bubbling phase.
->If we want it to get executed in capturing phase->
eventtarget.addEventListener(event,callback function,true);
useCapture->true ->turn on the capturing phase


# THE EVENT OBJECT->
When an event occurs->an event object is return to the add event listener function.  
let content=document.querySelector('h1');
content.addEventListener("click",function(event){
    console.log(event);
});

->Here event is the parameter it can be named anything.


# THE DEFAULT ACTION->
.preventDefault()
->prevent default action


# TARGET->
console.log(event.target.value);


## TASK-2 -> INtercative beahaviour for buttons. forms and modala ##
Duration -> 1.5 hour
 4 Projects 

