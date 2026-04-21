//insertion of element in DOM
//create element
let div = document.querySelector('div');
// let elem = document.createElement('p');
// div.append('<p>new parageaph</p>');// it is text but we need to insert element
let elem =document.createElement('p');
elem.innerText='new paragraph';
div.append(elem);// it is element inserted in DOM
// it is created at the end of the div but we can insert it at any position
// div.prepend(elem);// it is created at the beginning of the div
// div.before(elem);// it is created before the div
// div.after(elem);// it is created after the div

div.after(elem);// last instruction is priority so it is created after the div
div.before(elem);// last instruction is priority so it is created before the div
div.prepend(elem);// last instruction is priority so it is created at the beginning of the div
// there is a methpod insertAdjacentElement() to insert element at any position
// div.insertAdjacentElement('beforebegin',elem);// it is created before the div
// div.insertAdjacentElement('afterbegin',elem);// it is created at the beginning of the div
// div.insertAdjacentElement('beforeend',elem);// it is created at the end of the div
// div.insertAdjacentElement('afterend',elem);// it is created after the div
//removing 
// let p=div.children[3];
// p.remove();// removed last element last children;
// //parentNode = returns the immidiate parent of node

let alpha=document.querySelector('#alpha');
alpha.style.backgroundColor="yellow";
let parentNode= alpha.parentNode;
parentNode.append(elem);
//common parent methods
let newElement=document.createElement('div');
newElement.innerText ='hello';
parentNode.replaceChild(newElement,alpha);
parentNode.removeChild(newElement);
//get attribute
//console.log(div.getAttribute('attribute_name'));
//Manipulating CSS
//1.by direct method
//2. by attribute (class or style)
//let div=document.querySelector('div');
// div.setAttribute('style','background-color')




//if we  had a class named class1  given that .class1{ background-color=red;} then....

//div.setSAttribute('class',class1') 

// div.style.backgroundColor='red'
//or
//div.style.csstext=' multiple properties can be written here';
// to add class
// best method 
div.classList.add('class1');
div.classList.add('bluebg');
//toggle can  also be used in these
div.classList.remove('bluebg');
let isavailable = div.classList.contains('bluebg');
console.log(isavailable);

