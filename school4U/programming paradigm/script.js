//programmming paradigm
//the way in which we program

let arr = [5,7,8,2,6];

arr.map(element=>{console.log(element)});
// two types of programming 
// imparative programming and declarative programming

//you tell the computer how   //you describe what you want not how to
//to do something step wise    //do it

//procedural - procedural/function
function progInitiated(){

    console.log('program has initiated')
}


function checkNum(num){
    if(num===0){
        numIsZero();
    }
    else if(num>0){
        positive();
    }
    else if (num<0){
        negative();
    }
  
    progInitiated();
}
function positive(){
    console.log('num is positive')

}
function negative(){
    console.log('num is neg')
    
}
function numIsZero(){
    console.log('num is zero')
}

let num = 544;
checkNum(num);
//structured programming - 1. sequence 2. selection 3. iteration
//object oriented programming - objects and classes
//functional programming - functions as first class citizens
//functional programming is a type of declarative programming where we use functions to create and manage state and side effects

//Object oriented programming - objects and classes****************************
class Car{  
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('car has started');
    }

    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}



