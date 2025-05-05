// #FETCHING ELEMENT ->

// #MDN

// 1.BY ID->
// document.getElementById("specifications").

// 2.BY CLASS->
// document.getElementsByClassName('hidden')


// 3.BY TAG->
// document.getElementsByTagName('p')


// #QUERY SELECTOR->

// #ID->
document.querySelector('#specifications')

// #CLASS->
document.querySelector('.hidden')

// #QUERY SELECTOR ALL->

document.querySelectorAll('.hidden')

// #UPDATE->
// 1.Innerhtml->

let codingEx=document.querySelector('.page-footer');
codingEx

// get->
codingEx.innerHTML

// set->
codingEx.innerHTML=' '

// 2.Outerhtml

let outer=document.querySelector('.main-wrapper')

//get
outer.outerHTML

// set
outer.outerHTML = '<div id="myElement">New Content</div>';


// 3.Textcontent->

let textC=document.querySelector('.company');
textC.textContent


// #ADDING NEW ELEMENT->

// 1.At the end->
let para=document.createElement('p');
codingEx.appendChild(para)

// #CREATING TEXT NODE->

// 1.At the end
let para1=document.createElement('p');
para1.textContent ="I'm the text node";
codingEx.appendChild(para1);

// 2.At predefined position->

// let textNode=document.querySelector('.footer-nav-heading');
// let newText=document.createElement('h3');
// newText.textContent='Hii';
// textNode.insertAdjacentElement('beforeBegin',newText);


// #REMOVE CHILD->
// let textNode=document.querySelector('.footer-nav-heading');
// let newText=document.createElement('h3');
// newText.textContent='Hii';
// textNode.insertAdjacentElement('afterEnd',newText);
// let parentElement=document.querySelector('.page-footer-nav-col-1');
// let childElement=document.querySelector('.footer-nav-heading');
// parentElement.removeChild(childElement);


// OR

let parentElement = document.querySelector('.page-footer-nav-col-1');
let childElement = document.querySelector('.footer-nav-heading');
let childElement2 = document.querySelector('.child2');
childElement2.parentNode.removeChild(childElement2);


// #CHANGES IN STYLE SHEET->

// 1.STYLE->

// let content=$0;
// content.style.color='red';

// 2.CSSTEXT->
let content=$0;
content.style.cssText='color:red; background-color:black; font-size:3em';

// 3.SETATTRIBUTE->
content.setAttribute('style','color:red, background-color:white');

// 4.CLASSNAME->
let content=$0;
content.className;
