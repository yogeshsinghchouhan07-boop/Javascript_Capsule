let button=document.querySelector('button'

);
let theme='light';
let body=document.querySelector('body');
// button.addEventListener('click',()=>{
//     if(theme==='light'){ body.style.backgroundColor='grey';
//     body.style.color='white';
//     alert('theme changed to dark');
//     theme='dark';
// }
// else if (theme==='dark'){body.style.backgroundColor='white';
//     body.style.color='black';
//     alert('theme changed to light');
//     theme='light';

// }
   
// })//toggle can also be used
button.addEventListener('click',()=>{
    body.classList.toggle('dark');

})