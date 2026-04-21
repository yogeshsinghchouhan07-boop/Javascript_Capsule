let smallCursor=document.querySelector('.smallCursor');
let bigCursor=document.querySelector('.bigCursor');
//mouse move can work within the elemnt
//mouse move can work within the elemnt
document.addEventListener('mousemove',function(eventObj){

    smallCursor.style.left = eventObj.clientX + "px";
    smallCursor.style.top = eventObj.clientY + "px";
    bigCursor.style.top= eventObj.clientY+ "px";
    bigCursor.style.left = eventObj.clientX+ "px";
      console.log(eventObj.clientX,eventObj.clientY)
})
// function animateShadowCursor{

// }