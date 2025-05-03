// PRINTING
console.log('Hello Duniya');

//ALERT
alert('hello')

// VARIABLES
let a=5;
let b=12.5;
let status=true;
let name='Alfi';

var c=10;

// CONSTANTS
const num=4;

// OBJECTS
let person={
    firstName:'Alfi',
    age:20
    
};

// ARRAY
let array=[1,'alfi','arshi','shabnam']

//IF -ELSE
let marks=99;
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

//SWITCH CASE
let number=3;
switch(number){
    case 1:
        console.log('1')
        break;
    
    case 2:
        console.log('2')
        break;
    
    case 3:    
        console.log('3')
        break;
    
    default:     
    console.log('default')   
        
}

// LOOPS
//FOR LOOP
for (let i=0;i<5;i++){
    console.log(i)
}

// WHILE LOOP
let i=0;
while(i<=5)
{
    console.log('Alfi')
    i++;
}

//Do WHILE LOOP
let z=2;
do{
    console.log('a');
    z++;
}while(z<=5)


//FOR IN LOOP
let rectangle={
    length:1,
    breadth:2
};
// for(let keys in rectangle){
//     console.log(keys,rectangle[keys]);
// }

// FOR OF LOOP 
for (let keys of Object.keys(rectangle)){
    console.log(keys);
} 

