//PRIMITIVE TYPE STRING
let lastName='     Jehan';

//OBJECT TYPE STRING
let firstName=new String('Alfiya      ');

let s='   This is my string   ';

//LITERAL TEMPLATE
// let message=`Hello
// Guys,
// Alfiya this side!!`

let message=`Hello
Guys,
${firstName} this side!!`


let date=new Date();
console.log(date);


//ARRAYS

let numbers=[1,4,5,7];
console.log(numbers);

//ARRAY INSERTION

//END OF ARRAY
numbers.push(9);
console.log(numbers);

// BEGINNING OF ARRAY
numbers.unshift(8);
console.log(numbers);

//MID OF ARRAY
numbers.splice(2,0,'a','b','c','d');
console.log(numbers);

//ARRAY SEARCHING

// console.log(numbers.indexOf(7));

//OR

// if(numbers.indexOf('3')!=-1){
//     console.log('It is present at index '+ numbers.indexOf('a'));
// }
// else{
//     console.log('It is not present.')
// }

//OR

//INCLUDES->
console.log(numbers.includes('c'));

//OR
//DEFINING THE START POSITION FOR SEARCH->
console.log(numbers.indexOf('d',3));

// SEARCHING FOR REFERENCE TYPE STRINGS->

let courses = [
    {no:1, naam: 'Love'},
    {no:2, naam: 'Rahul'}];

// console.log(courses);
// let cou=courses.find(function(course){
//     return course.naam==='Love';
// })
// console.log(cou);
let cours=courses.find(cour=>  cour.naam==='Love');

console.log(cours);


// REMOVING ELEMENT->

let number=[1,2,3,4,5,6,7];
console.log(number); 

//end
number.pop();
console.log(number);

//start
number.shift();
console.log(number);

//middle
number.splice(1,2);
console.log(number);

//EMPTYING AN ARRAY

let newNum1=[1,2,3,4,5,6,7];
let newNum2=newNum1;

// newNum1=[];

// console .log(newNum1);
// console.log(newNum2);

// newNum1.length=0;

// console .log(newNum1);
// console.log(newNum2);

// OR

newNum1.splice(0,newNum1.length);
console.log(newNum1);


// COMBINING AND SLICING AN ARRAY->

// COMBINING(concat)
let first=[1,2,3];
let second=[4,5,6,7];

let combined=first.concat(second);
console.log(combined);

// SLICING(slice)

let sliced=combined.slice(2,4);
console.log(sliced);


//SPREAD OPERATOR   

let third=[10,62,3];
let fourth=[4,45,96,37];

// let spreadCombined=[...third,...fourth];
// console.log(spreadCombined);

let spreadCombined=[...third,'a','b','c','d','e','f', ...fourth];
console.log(spreadCombined);

// ITERATING AN ARRAY

let marks=[10,20,30,40,50,60,70,80];

// for(let keys of marks){
//     console.log(keys);
// }

// ITERATING ELEMENTS OF ARRAY USING FOR EACH LOOP


// marks.forEach(function(number){
//     return console.log(number);
// })

// OR

marks.forEach(number=> console.log(number));


//FOR IN LOOP
for(let keys in marks){
    console.log(keys);
}

// JOINING AN ARRAY

let arrJoin=[1,2,3,4,];
let ansJoin=arrJoin.join(',');
console.log(ansJoin);


// SPLITING A JOINED ARRAY

let stringSplit='This is my first message.';
let arrSplit=stringSplit.split(' ');
console.log(arrSplit);


// SORTING AN ARRAY

let sortNum=[40,30,10,20,50];
let arrSort=sortNum.sort();
console.log(arrSort);


// REVERSING AN ARRAY

let reverseArr=arrSort.reverse();
console.log(reverseArr);

//  FILTERING AN ARRAY

let int=[1,2,-1,-4,6,7,-5];

let filtered=int.filter(v=> v<0);
console.log(filtered);


// MAPPING AN ARRAY

let mapArr=[7 ,8,9,10]; 

let ansMap=mapArr.map(v=>'student no. '+v );
console.log(ansMap);

//MAPPING WITH OBJECTS

// let mapObj=[1,2,-6,-9];
// let filterMapObj= mapObj.filter(v=> v>=0);
// console.log(filterMapObj);

// let items=filtered.map(n=> {value : n});

// CHAINING

let mapObj=[1,2,-6,-9];
let items=mapObj.filter(v=> v>=0).map(n=> {value : n});
console.log(items);

// #REDUCING AN ARRAY->     
 let reduceArr=[1,2,3,4];
 let total=0;

//  for(let value of arr){
//     total+=value;
//  }

//  console.log(total);

let reduceAns=reduceArr.reduce((accumulator,currentvalue) => accumulator + currentvalue,0);
console.log(reduceAns);

