//part2
//DOM Manipulation
//5 phases of DOM Manipulation
//1.DOM
//2.selection of HTML element
//3.manipulation of HTML element
//4.change in CSS
//5.event listeners(event ko kaise handle karna hai)

// DOM is document object model
// // step:1 selection of HTML element
// let heading=document.querySelector("h1");
// console.log(heading);
// let a=document.querySelector("h2");
// console.log(a);
// let b=document.querySelector("p");
// console.log(b);
// //step:2 manipulation of HTML element
// a.innerHTML="DOM Manipulation";
// b.innerHTML="This is a package of DOM Manipulation";
// //step:3 change in CSS
// let c= document.querySelector('h1');
// c.style.color="blue";
// c.style.backgroundColor="orange";
// c.style.fontSize="50px";
//step:4 event listeners
let h1=document.querySelector("h1");
// h1.addEventListener(event,function())
h1.addEventListener("click",function(){
    h1.style.color="green";
    h1.style.backgroundColor="pink";
    h1.style.fontSize="30px";
    h1.innerHTML="You have clicked on the heading";
});