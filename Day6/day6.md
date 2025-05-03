# JS Basics->
Duration  - 45 min
functionality is handeled by javascript.

# FEATURES->
1.Light weight programming language.

1.Minimal Syntax: JavaScript has a simple and concise syntax, making it easy to learn and use.

2.Interpretation Instead of Compilation: It runs directly in browsers without requiring a heavy compilation process.

3.Dynamic Typing: No need to explicitly define data types, keeping the code lightweight and flexible.

4.No Heavy Dependencies: JavaScript runs natively in browsers without needing extensive frameworks or tools.


2.It is a scripting language.

JavaScript is called a scripting language because it automates tasks and controls the behavior of web pages within a runtime environment like a browser.


3.It is a client side scripting language.

JavaScript is called a client-side scripting language because it runs directly in the user's web browser to create dynamic and interactive web pages without needing server-side processing.

-> scripting ->tells what to do and what not to do.
-> It is used to add functionality to the web page.

-> Brendan Eich created js in 1995 working at netsacpe communications corporation.
-> He created it in 10 days.
-> Initially it was called as mocha.
-> The it was called as livescript then js.

# STANDARDS-> given by ECMAScript 
1.es5 
2.es6

JS  ------>JS Engine-> using js engine we can run js code.
-> firefox ->Spider Monkey
-> chrome ->V8

-> Js was first designed to run only on the browser as it was made as a client side language.

c++ program (node) + js code -> can run oustide the browser

# FOR PRINTING
            string-> sequence of character
console.log('Hello'); ->

for printing anything.

->FOR ALERT
-> alert('hello')

-> script tag is used to add all the client side instruction or code.

-> RUNNING IN THE node
PS C:\Users\VICTUS\OneDrive\Desktop\Web Dev\Js\Js class1>node script.js


# VARABLES
Name of the memory location.

->literal- value
let a=5;(number literal)
let b=12.5;(number literal)
let status=true;(boolean literal)
let name='Alfi';(string literal)

var c=10;

# DIFFERENCE BETWEEN VAR AND LET->

-> var-> global variable
   In var re-declaration is possible.
-> let->local variable(nearest code block)
   In let there is no re-declaration.

   var x = 10; 
   console.log(x); // Output: 10

   var x = 20; 
   console.log(x); // Output: 20

# RULES FOR NAMING A VARAIBLE
1.Cannot be a reserved keyword.
2.You should give meaningful name.
3.Cannot start with a number.
4.Cannot contain white space or hyphen.
5.Camel case must be used.->camelCase

->JS is dynamic typed language.

# CONSTANTS
Whose value cannot be changed and have a fixed value.
const num=4;


# DATA TYPES-> 
Duration -> 45 min

# PRIMITIVE TYPES-> In-built data types
1.Number
2.String->sequence of characters
3.Boolean
4.Undefined->value that is not defined.
5.Null->empty variable


# REFERENCE TYPE
1.Objects->
let objectName={
    properties:'',
};
 -> properties are also called as key value pairs.

eg->
let person={
    firstName:'Alfi',
    age:20   
};

->Can be accessed using 2 methords-
1.Dot notation
objectName.properties

eg->
person.age

2.Bracket notation
objectName['age']

eg->
person['age']


2.Arrays
Data structure which is used to contain list of items.
let array=[1,'alfi','arshi','shabnam']
-> array[2]


3.Functions


# OPERATORS 
Duration -> 1 hour
1.Arithmetic operators
+, -, *, /, %(remainder), **(power)

pre increment->++x
post increment->x++

pre decrement->--x
post decrement->x--

2.Assignment operators
=, +=, -, -=

3.Comparision operators
>, <, <=, >=, ===, !==

->equality operator->
1.Loose equality(==)
It's checks that value is same or not.

2.Strict equality(===)
It's checks that both value and data are same.

4.Logical
1.and->all condition must be true.-> &&
2.or->any one condition must be true-> ||
3.not-> true->false,flase->true


->WITH NON BOOLEANS 
1.falsy->
undefine,null,0,flase,''(empty value),Nan(not a number)

2.truthy->
anything that is not falsy

-> and->
Returns the first falsy value encountered or the last value if all are truthy.

-> or->
Returns the first truthy value encountered or the last value if all are falsy.
-> short circuiting in or operator
flase || 5 || 1 -> 5

->not->
Converts the value to its boolean opposite.


5.Bitwise
bits->
1,0

1.bitwise and->&

A     B    O/P
0     0    0
0     1    0
1     0    0
1     1    1

2.bitwise or->|

A     B    O/P
0     0    0
0     1    1
1     0    1
1     1    1

# TERNARY OPERATORS/CONDITIONAL OPERATORS
condition? value1 : value2


# OPERATOR PRECENDENCE
brackets,exponent, multiple,division,addition, subtraction


# CONTROL STATEMENTS
1.if-else

if(marks>=90){
    console.log('A')
}
else if(marks>=80){
    console.log('B')
}
else if(marks>=70){
    console.log('C')
}
else {
    console.log('D')
}


2.switch case->
switch(expression){
    case 1:
    
        //code
        break;
    
    case 2:
     
        //code
        break;
    
    case 3:
     
        //code
        break;
    
    default
     
        //code
      
    
}

# LOOPS
Duration -> 1 hour
Repetition of same task

-> FOR LOOP
for (let i=0;i<5;i++){
    console.log(i)
}

->WHILE LOOP
let i= ;
while(condition)
{
    //code
    i++;
}

-> Do WHILE LOOP->executes at least one time
let z=;
do{
    //code
    z++;
}while(condition);

->FOR IN LOOP

-> FOR OF LOOP-> applicable on iterables only(arrays and maps).
An iterable is any object that can return its elements one by one.
Arrays
Strings
Maps
Sets
Typed Arrays
Arguments object 


//FOR OF LOOP ON OBJECTS
for (let keys of Object.keys('rectangle')){
    console.log(keys);
}

Object.keys(rectangle):
This method retrieves all the keys (property names) of the object rectangle .
# OBJECTS 
Duration -> 1.5 hour
-> An entity which has some properties and behaviour.
-> A real world entity.
-> An instance of a class.
-> A collection of key value pairs.

# FUNCTIONS
-> A block of code the do a particular task.
-> A block of code that is repeating many times.

# METHOD
-> A function that is created inside an object is called method.

-> ACCESSING METHORD
objectName.methordName()


#  CREATION OF OBJECT USING FUNCTIONS

1.Factory function
-> A function where the objects are created.
-> Request-> function call
-> Response->return object
-> Steps->
1.Created a function.
2.Created an object inside the function.
3.Return the object


2.Constructor function(PascalNotation)
1.Create a function
2.Use this keyword and define properties and behaviour.

-> The object in which we are currently working is represented by this keyword.
-> This keyword referene to the current object.

-> OBJECT CONSTRUCTION USING CONSTRUCTOR FUNCTIONS
-> let objectName= new ConstructorFunctionName();

-> new-> creates an empty object.


# DYNAMIC NATURE OF OBJECTS
Any property or behaviour can be added or anytime after creation of the object.

# CONSTRUCTOR PROPERTY
-> Every object has a property that is called constructor.
-> Function is also an object.

-> let rectangle = new Function( 'parameter','code')
let obj= new rectangle();

// Create a constructor function dynamically
let Rectangle = new Function(
  'width', // Parameter 1
  'height', // Parameter 2
  `
  this.width = width; // Assign width to the object
  this.height = height; // Assign height to the object
  this.area = function() { // Add a method
    return this.width * this.height;
  };
  `
);

// Use the function to create an object
let obj = new Rectangle(10, 20);

console.log(obj.width); // 10
console.log(obj.height); // 20
console.log(obj.area()); // 200


new Function('parameter', 'code'):
The Function constructor is a way to dynamically create a new function in JavaScript.


-> TYPES IN JS
1.Primitive or value types
-> In this copy is created.
-> function call -> copy is created

2.Reference type or objects
-> In this address of the memory location is passed.
-> function call -> same address ko same/different name se point kar rahe hote hain

# CLONING OF OBJECT
1.Iteration
2.Assign
3.Spread


# GARBAGE COLLECTOR->
-> Finds all the variables and constants that are not in use and deallocate the memory.


