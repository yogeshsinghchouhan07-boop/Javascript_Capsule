//object are collection of key value pairs
//object literal syntax
let person={
    name:"yogesh",
    age:30,
    city:"Indore"
};
console.log(person);
//accessing object properties
console.log(person.name); // Output: "yogesh"
console.log(person["age"]);
// Output: 30
//modifying object properties
person.age=31;  
console.log(person.age); // Output: 31
//adding new properties to an object
person.country="India";
console.log(person.country); // Output: "India"
//deleting properties from an object
delete person.city;
console.log(person.city); // Output: undefined
    // object methods
person.greet=function(){
    console.log("Hello, my name is " + this.name);
};  
person.greet(); // Output: "Hello, my name is yogesh"
//object constructor syntax
function Person(name, age, city){
    this.name=name;
    this.age=age;
    this.city=city;
}
let person1=new Person("yogesh",30,"Indore");
console.log(person1);
//object properties and methods
console.log(Object.keys(person1)); // Output: ["name", "age", "city"]
console.log(Object.values(person1));
// Output: ["yogesh", 30, "Indore"]
console.log(Object.entries(person1));
// Output: [["name", "yogesh"], ["age", 30], ["city", "Indore"]]
//object destructuring
let {name, age}=person1;
console.log(name); // Output: "yogesh"
console.log(age); // Output: 30
//object spread operator
