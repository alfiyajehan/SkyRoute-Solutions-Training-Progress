console.log('rectangle');

//OBJECT
// let rectangle = {
//     //PROPERTIES
//     length:10,
//     breadth:12,

//     //BEHAVIOUR
//     draw: function (){
//       console.log('draw')  
//     }
// }; 
// rectangle.draw()

//FACTORY FUNCTION
// function createdRectangle(){
//     let rectangle = {
//         //PROPERTIES
//         length:10,
//         breadth:12,
    
//         //BEHAVIOUR
//         draw: function (){
//           console.log('draw')  
//         }
//     }; 
//     return rectangle;
// }

// OR

// function createRectangle(){
//     return rectangle = {
//         //PROPERTIES
//         length:10,
//         breadth:12,
    
//         //BEHAVIOUR
//         draw: function (){
//           console.log('draw')  
//         }
//     }; 
   
// }

//FUNCTION CALL
let rectangleObj1=createRectangle();


//VARAIBLE PARAMETERS
function createRectangle(len,Breadth){
    return rectangle = {
        //PROPERTIES
        length:len,
        breadth:Breadth,
    
        //BEHAVIOUR
        draw: function (){
          console.log('draw')  
        }
    }; 
   
}

let rectangleObj2=createRectangle(1,2);
console.log(rectangleObj2);

//CONSTRUCTOR FUNCTION
function Rec(l,b) {
    this.length=l;
    this.breadth=b;
    this.draw=function() {
        console.log('Constructor function')
    }
}

let constructobj1= new Rec(4,6);
console.log(constructobj1);

//DYNAMIC NATURE OF THE OBJECT

let a={
    b:1,
    c:2
};

a.c=4;
a.d=6;
console.log(a);
delete a.b;
console.log(a);

//PRIMITIVE TYPES
let x=10;
let y=x;
x++;
console.log(x);
console.log(y);

// REFERENCE TYPES

let u={value:10}
let v=u;
u.value++;
console.log(u);
console.log(v);

//CHECKING IF PARTICULAR PROPERTY PRESENT IN THE OBJECT
let rectanglee={
    length:1,
    breadth:2
};
if('color' in rectangle){
    console.log('Present')
}
else{
    console.log('Absent')
}


//  CLONING OF OBJECT

//ITERATION

let rectangle1 ={
    length:1,
    breadth:2
};

// let rectangle2={}

// console.log(rectangle1);
// console.log(rectangle2);

// for(let keys in rectangle1){
//     rectangle2[keys]=rectangle1[keys]
// }
// console.log(rectangle2)

// rectangle1.length++;
// console.log(rectangle1)
// console.log(rectangle2)


// //ASSIGN
let rectangle3=Object.assign({}, rectangle1);
console.log(rectangle3);

 let rectangle4={value:2}

 let rectangle5=Object.assign({}, rectangle3,rectangle4);
 console.log(rectangle5);

//SPREAD

let rectangle6={...rectangle5};
console.log(rectangle6);