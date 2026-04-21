let date = new Date();
console.log(date.toLocaleString())
let user1 = {
    name: "yogesh",
    RollNo : 62,
    passion : "physics",
    getUser : Introduce
}


let user2 = {
    name: "Vinod",
    RollNo : 61,
    passion : "chemistry",
    getUser : Introduce
}
 function Introduce(){
    console.log(`my name is ${this.name}, my RollNo is ${this.RollNo}`) 
}
//passing the reference of function to the object
user1.getUser();

user2.getUser();
console.log(user1)
console.log(user2)
//OOP's - Object Oriented Programming
//1.object literal
//2.factory function
//3.constructor function
//4.class

// multiple objects can be created using factory function, constructor function and class but not with object literal
function student (name, RollNo, passion){
    return {
        name : name,
        RollNo : RollNo,
        passion : passion,
        getUser : function(){
            console.log(`my name is ${this.name}, my RollNo is ${this.RollNo} my passion is ${this.passion} `)
        }
    }
}
let user3 = student("Rohit", 63, "Maths");
let user4 =student("himanshu", 40, "physics");
console.log(user3)
user3.getUser()
console.log(user4)
user4.getUser()

//constructor function
function Student(name, RollNo, passion){
    this.name = name;
    this.RollNo = RollNo;
    this.passion = passion;
    return this;
}
let user5 = new Student("mohit", 63, "Maths"); //new keyword creates an empty object and then it calls the constructor function and then it assigns the value to the object and then it returns the object
console.log(user5)
let user6 = new Student("timanshu", 20, "hindi");
console.log(user6)

//class Syntax (es6)
class Bacche{
    name = " Yogesh";
    class = 12;
    rollno = 62;
    constructor(name, classs, rollno){
        this.name = name;
        this.classs = classs;
        this.rollno = rollno;
    }
    

}
let s1 = new Bacche("Alice", 12, 62);
let s2 = new Bacche("Bob", 12, 63);
console.log(s1)
console.log(s2)

//Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    this.getDetails = function(){ 
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
}
}// constructor function
let p1 = new Person("yogesh", 22);
console.log(p1);
p1.getDetails() // My name is yogesh and I am 22 years old.
let p2 = new Person("vinod", 23);
console.log(p2);
p2.getDetails() // My name is vinod and I am 23 years old.
 // p1 and p2 are at diff memory location but they have same function getDetails which is not memory efficient

 // getDetails function is created for each object which is not memory efficient, to solve this problem we can use prototype
 //we put the getDetails function in the prototype of the constructor function so that it is shared by all the objects created by the constructor function
function Person1(name, age){
    this.name = name;
    this.age = age;
}
Person1.prototype.getDetail = function(){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
}
console.log(Person1.prototype)
let p3 = new Person1("yogesh", 22);
console.log(p3);
p3.getDetail() // My name is yogesh and I am 22 years old.
let p4 = new Person1("vinod", 23);
console.log(p4);
p4.getDetail()
 // My name is vinod and I am 23 years old.


 function BankAccount(accountNumber, balance=0){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.deposit = function(amount){
        console.log(`deposited amount : ${amount} , total : ${this.balance}`)
    }
}

let userAccount = new BankAccount("1234567890", 1000);
console.log(userAccount)
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`)
}
BankAccount.prototype.withdraw = function(amount){
    if(this.balance >= amount){
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`)
    } else {
        console.log("Insufficient funds.")
    }
}
// userAccount.deposit(500); // Deposited 500. New balance is 1500.
// userAccount.withdraw(200); // Withdrew 200. New balance is 1300.
// userAccount.withdraw(1500); // Insufficient funds.

console.log(userAccount)
userAccount.deposit(500);    // Deposited 500. New balance is 1500.
console.log(userAccount)

userAccount.withdraw(200);   // Withdrew 200. New balance is 1300.
console.log(userAccount)

// # is used to make the property private in class syntax
class BankAccount1{
    #accountNumber;
    #balance;
    constructor(accountNumber, balance=0){
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.#balance}.`)
    }   
    withdraw(amount){
        if(this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`)
        } else {
            console.log("Insufficient funds.")
        }   
    }
    setBalance(amount){
    this.#balance = amount;
    console.log(`Balance set to ${this.#balance}.`)
}

    getBalance(){
        console.log(`Current balance is ${this.#balance}.`)
        return this.#balance;
    }   
}
let userAccount1 = new BankAccount1("1234567890", 1000); 
console.log(userAccount1)
userAccount1.deposit(500);    // Deposited 500. New balance is 1500.
userAccount1.withdraw(200);
userAccount1.getBalance();// Current balance is 1300.
// userAccount1.#balance = 2000; // SyntaxError: Private field '#balance' must be declared in an enclosing class

//but userAccount1.balance = 2000; // this will create a new property balance in the userAccount1 object and it will not change the value of #balance
userAccount1.balance = 2000;
console.log(userAccount1) // BankAccount1 { balance: 2000 }
 userAccount1.setBalance(5000); // Balance set to 5000.
userAccount1.getBalance(); // Current balance is 5000.
// set / get balance is used to access the private property #balance from outside the class. It is a good practice to use set / get methods to access private properties instead of directly accessing them.
//inheritance in class syntax
class SavingsAccount extends BankAccount1{
    constructor(accountNumber, balance=0, interestRate=0.05){   
        super(accountNumber, balance); // calling the constructor of the parent class
        this.interestRate = interestRate;
    }   
    calculateInterest(){
        const interest = this.getBalance() * this.interestRate;
        console.log(`Interest for the current balance is ${interest}.`)
    }
}
let savingsAccount = new SavingsAccount("9876543210", 2000, 0.1);
console.log(savingsAccount)
savingsAccount.deposit(1000);
 
savingsAccount.calculateInterest(); // Interest for the current balance is 300.

//polymorphism in class syntax
//polymorphism is giving the same name to different functions in different classes. It is achieved by method overriding in class syntax.    but behavior of the function is different in different classes.
// imagine a play() function in a game class and a play() function in a music class. Both functions have the same name but they have different behavior. This is polymorphism.same it can be in video player.
class MediaPlayer{
    play(){
        console.log("Playing media...")
    }   
}
class VideoPlayer extends MediaPlayer{
    play(){
        console.log("Playing video...")
    }   
}
class MusicPlayer extends MediaPlayer{
    play(){
        console.log("Playing music...")
    }
}
class GamePlayer extends MediaPlayer{
    play(){
        console.log("Playing game...")
    }   
}
let videoPlayer = new VideoPlayer();
let musicPlayer = new MusicPlayer();
let gamePlayer = new GamePlayer();
videoPlayer.play(); // Playing video...
musicPlayer.play(); // Playing music...
gamePlayer.play(); // Playing game...
