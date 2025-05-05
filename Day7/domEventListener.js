// // #ADDEVENTLISTENER->
// document.addEventListener("click",function(){
//     console.log('I clicked on document')});

// #REMOVE EVENTLISTENER ->

// function print(){
//     console.log('I clicked');
// }

// document.addEventListener("click",print);
// document.removeEventListener("click",print);


// #DISPATCHEVENT->
// document.addEventListener("click",function(){
//     console.log('I clicked on document')});
// document.dispatchEvent(new Event('click'));

// #THE EVENT OBJECT->
// let content=document.querySelector('h1');
// content.addEventListener("click",function(event){
//     console.log(event);
// });


//PREVENT DEFAULT ACTION->
// let links=document.querySelectorAll('a');
// let thirdLink=links[2];
// thirdLink.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("Prevent default Event")
// });


//NODENAME->

let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName ==='SPAN'){
        console.log(event.target.textContent);
    }
});
