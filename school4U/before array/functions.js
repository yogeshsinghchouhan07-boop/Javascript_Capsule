// function definitions
// function functionName(parameters) {
//     // function body
// }

function add(a, b) // parameters that are block scoped
 {
    return a + b;
}

function subtract(a, b) {
    let result = a - b;
    return result;
}

let num1 =10;
let num2 =5;

let sum = add(num1, num2);// arguements list
console.log("Sum: " + sum);

// name greeting function
function call(name){
    console.log("Hello "+name+"!");
}
call("Yogesh");
// default parameters
function greet(name="Guest"){
    console.log("Welcome "+name+" to JavaScript programming!");
}

greet();// defafult value will be used
greet("Alice"); // "Alice" will be used

// function expression
let multiply = function(a, b){
    return a * b;
}
function average(x, y){
    let avg =(x + y)/2;
    return avg;
}

let result = average(4,8);
console.log(result);
// arrow function
//() => {}
let square = (n) => {
    return n * n;
}
let divide = (a, b) => {
    return a / b;
}
let quotient = divide(20, 4);
console.log("Quotient: " + quotient);
let greeting=(greetName)=>{
     console.log("Hi "+greetName+"!");
}
//anonymous funstion
setTimeout(function(){
    console.log("way to khatu");
},3000);
let length=()=>{
    console.log("length is 5cm");
}
setTimeout(length,5000);
//immidiately invoked
(function(){
    console.log("hello");
})() // no need to call function
// we use async there 
// (async function(){
//     console.log("hello");
// })()


greet1();


function greet1(){
    console.log("shyampyare ki jai");  // cam be accessed before declaration
}
string.array.object.html// greet2();

// let greet2=()=>{
//     console.log("jai hind");   cant be accessed before declaration
// }

//Question no 1
// make function that takes a string and return its first letter capital

function Capital(str){
    console.log(str.charAt().toUpperCase()+str.slice(1));

}

Capital("yogesh");
setTimeout(function(){
    alert("please log in");
},5000);