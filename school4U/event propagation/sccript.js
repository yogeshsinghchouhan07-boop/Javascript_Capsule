let grands=document.querySelector('.grand-parent');
let parents=document.querySelector('.parent')
let childs=document.querySelector('.child')
grands.addEventListener('click',function(event){
    console.log("buddhe ko uda diya" )
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(this)
    event.stopPropagation()
    
},true)//Here, when I clicked the child Then I found that I have applied the stop propagation at the grandparent element. Then, due to true, the capturing is enabled, and the grandparent is accessed at the first, due to which, due to stop propagation, it has stopped on the element grandparent. 
parents.addEventListener('click',function(event){
    console.log("baap ki ammi thok dii" )
    console.log(event.target)
    console.log(event.currentTarget)
    event.stopPropagation();//It has stopped the bubbling of the event when we clicked on the child element. When the bubbling begins, it reached the parent, and then it stopped due to the influence of `stopPropagation()`. 
})
childs.addEventListener('click',function(event){
    console.log("clicked child" )
    console.log(event.target)// the element on which we clicked initially. 
    console.log(event.currentTarget) /// Shows the element on which the current event is working 
    console.log(this)// otherwise window objectincase of function it acts as currenttarget Otherwise, act as a window object. 
})
//by deafult bubbling occurs
//root
//
//child
//
//target
//consist of three phases
//1. capturing phase, root---> target
//2. target phase ,the event reaches to target
//3. bubbling phase ,the event travel back from target to root
//"event.target" & "event.currentTarget"



// stopPropagation() and stopImmediatePropagation() 
// stopPropagation immediately stops the bubbling or capturing of an element if we add it at the bottom of an event listener function. 

//As an example, if I add the stopPropagation() at the child element, then it will immediately stop on the child which I clicked at the initial.
//StopImmediatePropagation() will help you to strictly stop the event which is happening on the present event or element. As an example, if you have Specified the event handling on an element of the same type in two event
