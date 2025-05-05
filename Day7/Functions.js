// #DEFINING A FUNCTION->
//1. Normal function declaration 
function run(){
    console.log('running');
}
run(); //invoke

// 2.FUNCTION ASSIGNMENT->

// a.Named Function assignment
let stand=function walk(){
    console.log('walking');
}
stand();
let jump=stand;
jump();

// b.Anonymous Function assignment

let stand2=function(){
    console.log('walking');
}
stand2();

// DYNAMIC NATURE OF JS->
let x=1;
x='a';
console.log(x);

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5,6));


// #ARGUMENTS IN JS->it is an object
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5,6));

// function sum(u,v){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5,6));
// let ans=sum(1,2,3,4,5,6);
// console.log(ans)

//SUM OF GIVEN NUMBERS WITH FOR OF LOOP->
// function sum(){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5,6));


//REST OPERATOR->
function sum(...args){
    console.log(args);

}
sum(1,2,3,4,5,6,7,8,9,10);

// #DEFAULT PARAMETERS->

function interest(p,r=6,y=10){
    return p*r*y/100;
}

console.log(interest(1000));

// let person={
//     fName:'Alfiya',
//     lName:'Jehan'
// };

//#GETTER AND SETTER->
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

//-> read only functiom


//GETTER AND SETTER
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
// GETTER
// console.log(person.fullName);

// SETTER
// person.fullName="Shabnam Jahan";
// console.log(person.fName);


// #TRY AND CATCH->

// try{
//     person.fullName=true;
//     console.log(person.fName);
// }

// catch(e){
//     alert(e);
// }

// #SCOPE->
function a(){
    const w=5;
}

const t=3;
function d(){
   
    const w=5;
}
