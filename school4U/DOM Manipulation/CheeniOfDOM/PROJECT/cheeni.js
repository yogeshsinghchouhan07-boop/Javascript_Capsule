let a = document.querySelector("h1");
a.addEventListener("click", function () {
    a.style.color = "red";
    a.style.backgroundColor = "yellow";
    a.style.fontSize = "40px";
    a.innerHTML = "You have clicked on the heading";
});
let box=document.querySelector("p");
let button=document.querySelector("button");
button.addEventListener("click",function(){
    box.style.color="white";
    box.style.backgroundColor="green";
    box.style.fontSize="20px";
    box.style.scale="1.1";
})
let offbutton=document.querySelector(".offbutton");
offbutton.addEventListener("click",function(){
    box.style.color="black";
    box.style.backgroundColor="red";
    box.style.fontSize="16px";
    box.style.scale="1";
})