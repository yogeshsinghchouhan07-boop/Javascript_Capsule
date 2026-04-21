
let display=document.querySelector('.display')
function appendValue(text){
    if(display.innerText==='0'){
       display.innerText= text;
       return  ;
    }
    else{ display.innerText=`${display.innerText}${text}`}
  
}
function calculate(){
    let result=eval(display.innerText)
console.log(result);
display.innerText=result;

}