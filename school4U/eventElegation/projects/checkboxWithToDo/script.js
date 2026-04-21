let listContainer=document.querySelector('.listContainer');
let listItem=document.querySelector('.listItem');
listContainer.addEventListener('click',(event)=>{
    if(event.target.className==='listItem'){
        event.target.style.textDecoration= 'line-through';
    }


   
  
}) 