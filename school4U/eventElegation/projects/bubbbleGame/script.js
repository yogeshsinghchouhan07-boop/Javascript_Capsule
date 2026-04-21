let numberOfCircles = 70;
let game=document.querySelector('.game');
let timerValue=document.querySelector('.timerValue');
let targetValue=document.querySelector('.targetValue');
let scoreValue=document.querySelector('.scoreValue');
let target;
let timer=10;
setInterval(()=>{
    
    if(timer<=0){
        return;
    }
    timer--;

    timerValue.innerText=timer;
    
    timerValue.innerText= timer;

    alert('you')
    
},1000)

for (let i=2;i<=70;i++){
let divElem=document.createElement('div');
divElem.className = 'circle';

let number= Math.ceil(Math.random()*10);
console.log(divElem)
divElem.innerText=number;
game.append(divElem)
}
function generateTarget(){
     target = Math.ceil(Math.random()*10)
     targetValue.innerText= target;
}
generateTarget();
console.log(target)

game.addEventListener('click',function(event){
    if(event.target.className === 'circle'){
        console.log(event.target);
        
        let number1 = Number(event.target.innerText);
        if(target === number1){
            let scoreVal= Number(scoreValue.innerText);
            console.log(scoreVal);
           scoreVal+=10;
           scoreValue.innerText=scoreVal;
           

        }
    
    generateTarget();
    }
    
})


