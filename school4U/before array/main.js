
{console.log("hey,good morning");
//alert("welcome to js marathon"); 
let age;
age=20;
console.log(age);
age=21;
console.log(age);
//means let variable can be changed further in the code
let name="yogesh",height;
console.log(name);
name ="ajay";
console.log(name);
// means there can be any data type of variable in let in js
console.log(age,name,height);
// use ctrl + shift + i to open console in browser
// we can use ctrl+/ to comment or uncomment the code
{let city="pune"; // block scope
console.log(city);}
// console.log(city);
// this will give error as city is block scoped variable
let school="gps gudha";
{console.log(school)};
console.log(school);
// school is accessible inside and outside the block
const pi=3.14;
console.log(pi);
// pi=3.15; // this will give error as const variable cant be changed
// const radius; // this will give error as const variable must be initialized while declaring
// console.log(radius);
//RULES FOR VARIABLRE DECLARATION
// name != Name;
let _name="yogesh";
let $name="ajay";
let name1="ajay";
let name_1="ajay";
let name$1="ajay";
console.log(_name,$name,name1,name_1,name$1);
// let 1name="ajay"; // this will give error as variable cant start with number
// let var="yogesh"; // this will give error as var is reserved keyword in js
// camelcase = myVariableName
// snakecase = my_variable_name
// pascalcase = MyVariableName
// kebabcase = my-variable-name (not used in js)
let price1 =100;
let price2 =200;
let totalprice=price1 + price2;
console.log(totalprice);
let firstname="yogesh";
let lastname="singh";
let fullname= firstname + " " + lastname;
// console.log("Fullname:",fullname);
// let cost1="100";
// let cost2="200";
// let totalcost= cost1 + cost2;
// console.log("Totalcost:",totalcost);
// // in above code its concatenation not addition as both variables are string
// let a=10;
// let b="20";
// let total=a + Number(b);
// console.log("Total:",total);    
let a=10;
let b=20;
// let yourName = prompt("enter your name:");
// let yourAge = prompt("enter your age:");
// console.log("Hello " + yourName + ", your age is " + yourAge);
// let fullname1= "yourName" + " " + "yourAge";
// console.log("Fullname:",fullname1);
}
/*?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????*/
//JAVASRIPT IS A DYNAMICALLY TYPED LANGUAGE


{ 
    let a=10;
console.log(a);
console.log(typeof a);
a="yogesh";
console.log(a);
console.log(typeof a);
a=true;
console.log(a);
console.log(typeof a);
a=null;
// let number=parseint("12"); changes string to number
let number=Number("12"); // changes string to number
// console.log(number);
// console.log(typeof number);
// no semicolon is needed in js
console.log("2"+2) //concatination of a string with an number
console.log(typeof null) // object
console.log("2"-2) //subtraction of a string with an number baja dalt hai number kiii
console.log("2"*2) //multiplication of a string with an number
console.log("2"/2) //division of a string with an number
console.log("yogesh"-2) //NaN not a number
}
// let can be redeclared in same scope
// const cant be redeclared in same scope
// var can be redeclared in same scope
// let can be updared in same scope
// const cant be updated in same scope
// var can be updated in same scope
 
{console.log("5"-2); //3
console.log("5"+2); //52
/*here is the first seection of code in js just inhale better then you thought*/








//operators in js
/* the value at which opetration is performed is called operand

arithmetic operators
assignment operators
comparison operators
logical operators
bitwise operators
ternary operators
increment and decrement operators
exponent are shown as ** in js 2**3 = 2 to the power 3 = 8
*/




/*?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
*/

console.log("5+2:",5+2);
// loose not equal to
console.log("5!=5:",5!=5);
// strict not equal to
console.log("5!==2:",5!==2);
//INCREMENT AND DECREMENT OPERATORS
let a=10;
console.log("a:",a);
console.log("++a:",++a);
console.log("a++:",a++);
console.log("a:",a);
console.log("--a:",--a);        
console.log("a--:",a--);
console.log("a:",a);
// in the above code ++a and --a are pre increment and pre decrement operators
// Ternary operator
let age=18;
let canVote=(age>=18) ? "yes you can vote": "no you cant vote";
console.log("canVote:",canVote);
// if age is greater than or equal to 18 then the value of canVote will be "yes you can vote" otherwise it will be "no you cant vote"
/*?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
*/
let b=2,c=3,d=4;
let result= b>c? (b>d?b:d) : (c>d?c:d);
console.log("result:",result);
// the above code finds the largest number among b,c and d using nested ternary operator

// bitwise operators
 
console.log("5 & 3:",5 & 3); // AND
console.log("5 | 3:",5 | 3); // OR
// bitwise not
// 001001 = 110110
console.log("~5:",~5);
// here -ve of (n+1) is stored
// as 5 is 00000101 in binary
// its not will be 11111010(as wwe will take 2s complement of 5)
// which is -6 in decimal
console.log(~(-5));
// here -ve of (n+1) is stored
// as -5 is 11111011 in binary
// its not will be 00000100(as wwe will take 2s complement of -5)
// which is 4 in decimal
}
{
let password= "";
let username="";
let result= (password&&isername) ? "login successful" : "login failed";
console.log("result:",result);
//short circuiting
//breaking  of circuiting at first true operand
let res= password || username || "guest user";
console.log("res:",res);
//incase of and operator if first operand is false then it will return false without checking second operand
let res1= password && username && "guest user";
console.log("res1:",res1);
let x="data" ?? "default value";
console.log("x:",x);
// nullish coalescing operator (??) returns the right side operand when the left side operand is null or undefined
let y=null ?? "default value";
console.log("y:",y);
let z=undefined ?? "default value";
console.log("z:",z);
}
/*?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
*/
// let num1= Number(prompt("enter first number:"));
// let num2= Number(prompt("enter second number:"));
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);
// console.log(num1**num2);
// the above code takes two numbers as input from the user and performs basic arithmetic operations on them....
{let num= 11;
let res1= (num>=10 && num<=20) ? "number is in the range of 10 to 20" : "number is out of range";
console.log(res1);

let username="admin";
let password="12345";

let databaseUsername="admin";
let databasePassword="12345";
let loginResult= (username===databaseUsername && password===databasePassword) ? "login successful" : "login failed";
console.log("loginResult:",loginResult);
// the above code checks if the username and password entered by the user matches the stored username and password in the database  
let a=5;
let b =2;
a+=b<< 1; // a=a + (b shifted left by 1)
console.log("a:",a);
// in the above code b is shifted left by 1 bit and then added to a and the result is stored in a
// before shifting  00000010
// after shifting   00000100
// then a=5 + 4 =9  
// exor operator
console.log("5 ^ 3:",5 ^ 3); // exor
// before exor  00000101
//              00000011
// after exor   00000110 =6
// exor gives 1 when both bits are different otherwise it gives 0
//condidtion in js
/* if(condition){
    //code to be executed if condition is true
    }else{
    //code to be executed if condition is false
    }
*/}


{
// check whether a product is out of stock or not
{let stock=0;
if(stock>0){
    console.log("product is in stock");
}else{
    console.log("product is out of stock");
}}
// this make our code descision making possible
let weather="rainy";
if(weather==="sunny"){
    console.log("wear light clothes");   }
else if(weather==="rainy"){
    console.log("take an umbrella");   }    
else if(weather==="cloudy"){
    console.log("wear a jacket");   }
else{
    console.log("have a nice day");   }
// the above code suggests what to wear based on the weather condition
let battery=15;
if(battery>=75){
    console.log("battery is full");   }
else if(battery>=50){
    console.log("battery is half full");   }
else if(battery>=20){
    console.log("battery is low");   }
else{
    console.log("battery is critical");   }
    
// the above code gives battery status based on the battery percentage
let age =25;
let result= (age>=18 && age<=26) ? "you are eligible to vote" : "you are not eligible to vote";
console.log("result:",result);
// the above code checks if the person is eligible to vote based on their age using ternary operator
// NESTED IF ELSE
let number_of_students=45;
if(number_of_students>0){
    if(number_of_students<=30){
        console.log("class is small");   }
    else{
        console.log("class is large");   }      }
        else(console.log("no students in class"));
// the above code checks the size of the class based on the number of students using nested if else statements
//challange1
let cartvalue=2500;
if(cartvalue>3000){
    console.log("you get 20% discount"); 
cartvalue=cartvalue - (cartvalue * 0.20);}
else if(cartvalue>2000){
    console.log("you get 15% discount");  
cartvalue=cartvalue - (cartvalue * 0.15);}
else if(cartvalue>1000){
    console.log("you get 10% discount"); 
cartvalue=cartvalue - (cartvalue * 0.10);
}
else{
    console.log("no discount");  
}
console.log("final cart value:",cartvalue);    
// the above code gives discount based on the cart value using if else statements
}
// shortcuts
{
let a=10;
let b=20;
let c=30;
console.log(`a: ${a}, b: ${b}, c: ${c}`);
// use of backticks (`) and ${} to print variables in a string
// subscription programme
let subscriptionType="premium";
if (subscriptionType==="premium"){
    console.log("you have access to all content");  }
else if(subscriptionType==="standard"){
    console.log("you have access to most content");  }
else if(subscriptionType==="basic"){

    console.log("you have access to limited content");  }
else{
    console.log("please subscribe to access content");  }   }
// the above code gives access to content based on the subscription type using if else statements
// use of template literals to print variables in a string
// {let colour=prompt("enter a colour(blue,green,voilet):");
// console.log(`you have selected the colour: ${colour}`);
// if(colour==="blue"){
//     console.log("the colour of sky is blue");  }
// else if(colour==="green"){
//     console.log("the colour of grass is green");  }
// else if(colour==="voilet"){
//     console.log("the colour of flower is voilet");  }
// else{
//     console.log("colour not recognized");  }   }
// // the above code gives information about the selected colour using if else statements
{
let userRole="admin";
switch(userRole){
    case "admin":
        console.log("you have full access");
        break;
    case "editor":
        console.log("you can edit content");
        break;
    case "viewer":
        console.log("you can view content");
        break;
    default:
        console.log("role not recognized");
}
}
// the above code gives access to content based on the user role using switch case statement

// loops in js
let i=1;
for(i=1;i<=5;i++){
    console.log("i:",i);
}   
// FOR LOOP
//for(initialization;condition;increment/decrement){
    //code to be executed
//}
for(a=1;a<=10;a++){
    console.log("jai shree shyam");
}
// while loop
let j=1;
while(j<=5){
    console.log("j:",j);
    j++;
}
// while loop checks the condition first then executes the code
// do while loop
let k=1;    
do{
    console.log("k:",k);
    k++;
}
while(k<=5);
// do while loop executes the code first then checks the condition

