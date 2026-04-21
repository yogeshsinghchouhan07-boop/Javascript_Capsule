let container=document.querySelector(".container") 
// // console.log(container.childNodes)
// container.childNodes.forEach((elem)=>{
//     // console.log(elem)
// elem.addEventListener('click',()=>{

//     console.log(elem.innerText)
// })
// })
container.addEventListener('click',function(event){
   if(event.target.classList.contains('box')){
    console.log(event.target.innerText)
   }
})
//EVENT DELIGATION 
//The Event Delegation is a technique in JavaScript where you add an event listener to a parent element instead of adding it to multiple child elements. The parent delegates the event handling to its child using the bubbling phase of event propagation. 