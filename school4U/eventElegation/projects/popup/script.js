let bigContainer=document.querySelector('.modalContainer');
let btn=document.querySelector('.btn');
let closeBtn=document.querySelector('.closeBtn');
btn.addEventListener('click',()=>{
    bigContainer.style.display='flex';
});
closeBtn.addEventListener('click',()=>{
    bigContainer.style.display='none';
})
bigContainer.addEventListener('click',(event)=>{
    console.log(event.target.className)
    if(event.target.className === 'modalContainer'){
        bigContainer.style.display='none';
    }
   
   
})

