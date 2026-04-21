// imparative programming

//you tell the computer how   //you describe what you want not how to
//to do something step wise    //do it
//procedural - procedural/function
let arr=[1,2,3,4,5];
let doubledArr = [];
for(let i=0; i<arr.length; i++){
    doubledArr.push(arr[i]*2);
}
console.log(doubledArr)
//declarative programming
let arr1=[1,2,3,4,5];
let double = arr1.map(function(elem){
    return elem*2;
})
// arr1.map(elem=>elem*2)  //arrow function
console.log(double)
//pure function - no side effect, same input gives same output
function add(a,b){
    return a+b;
}
// impure function - has side effect, same input can give different output
let count = 0;
function increment(){
    count++;
    return count;
}
increment();
increment();
console.log(count) 
//immutable data - data that cannot be changed
let arr2 = [1,2,3];
let newArr = arr2.concat(4);
console.log(arr2) // [1,2,3]
console.log(newArr) // [1,2,3,4]
// higher order function - a function that takes another function as an argument or returns a function
function higherOrderFunction(func){
    return function(){
        console.log("Before function call");
        func();
        console.log("After function call");
    }}
    //immutability - data that cannot be changed
    const obj = {name: "John", age: 30};
    obj.location = "USA";
    console.log(obj) // {name: "John", age: 30, location: "USA"}    
    const updatedObj = {...obj, location: "India"}; //spread operator which creates a new object with the properties of the original object and updates the location property
    console.log(updatedObj) // {name: "John", age: 30, location: "India"}
      //functional programming doesnt allow mutation of data, it creates new data instead of changing existing data
      let list =["aaloo","bhindi","gobhi"];
      let newList = list.concat("tamatar");// [...list,"tamatar"] //spread operator which creates a new array with the elements of the original array and adds "tamatar" at the end
      console.log(list) // ["aaloo","bhindi","gobhi"]
      console.log(newList) // ["aaloo","bhindi","gobhi","tamatar"]
      function renoveLastItem(list){
        let newListt =list.slice(0,-1); //slice method which creates a new array with the elements of the original array except the last element
        return newListt;
      }
      let newListt = renoveLastItem(list);
      console.log(list) // ["aaloo","bhindi","gobhi"]
      console.log(newListt) // ["aaloo","bhindi"]
      //avoid shared state 
      // shared state is when multiple functions or parts of the code can access and modify the same data, which can lead to bugs and unpredictable behavior
      let total = 0;
      function addToTotal(amount){
        total += amount;
        return total;
      }
      addToTotal(10);
      console.log(total)
       function capitaliseFirstLetter(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
        console.log(capitaliseFirstLetter("hello")) // "Hello"
        //aviod side effects
        //side effect is when a function modifies some state outside its own scope or has an observable interaction with the outside world, such as modifying a global variable, changing the value of an argument passed by reference, or performing I/O operations like logging to the console or writing to a file.
        //reuse or compose functions
        let name1 = "yogesh singh"
       function createUserName(str){
        return "@" + str.toLowerCase().replaceAll(" ","");
        }
        console.log(createUserName(name1)) // "@yogesh"
        function createEmail(str){
            return createUserName(str) + "@gmail.com";
        }
        console.log(createEmail(name1)) // "@yogesh@gmail.com"

        const toLower = (str) => str.toLowerCase();
        let result = toLower("HELLO");
        console.log(result) // "hello"
        let removespaces = (str) => str.replaceAll(" ","");
        let result1 = removespaces("hello world");
        console.log(result1) // "helloworld"
        let compose = (f,g) => (x) => f(g(x));
        let addAt = (str) => "@" + str;

        let result2 =  addAt("yogesh");
        console.log(result2) // "@yogesh"
        function createUserName1(str){
    return addAt(removespaces(toLower(str))); 
        }
        let result3 = createUserName1(name1);
        console.log(result3) // "yogesh"


        //don't iterate with loops, use recursion or higher order functions
        let array = [1, 2, 5, 8, 10];
let even= [];
for (let i=0; i < array.length; i++)
    { if (array[i] % 2 == 0) 
        { even.push(array[i]);

         } 
        }
        console.log(even) // [2, 8, 10]

//// another way to do this is using filter method which is a higher order function that takes a callback function and returns a new array with the elements that satisfy the condition in the callback function
let even1 = array.filter(function(elem){
    return elem % 2 == 0;
})
console.log(even1); // [2, 8, 10]

//Loose Coupling - functions should not be tightly coupled with each other, they should be independent and reusable ,how dependent a piece of code on another piece of code is coupling;
let endPoint = "https://www.example.com";
// function getUser( endPoint){
//     fetch(`${endPoint}/user`)
// }

// function getProducts(endPoint){
//     fetch(`${endPoint}/products`)
// }
// function getReviews(endPoint){
//     fetch(`${endPoint}/reviews`)
// }
////////******************************************************* */
{function fetchdata(endpoint, route){
    return fetch(`${endpoint}/${route}`);
}

fetchdata(endPoint, "user");
fetchdata(endPoint, "products");
fetchdata(endPoint, "reviews");

}
//******************************************************************/
// function fetchDate(fn) {
//     let endPoint = "https://www.example.com";
//     fn(endPoint)
// }

// function getUser(endPoint){
//     fetch(`${endPoint}/user`)
// }

// function getProduct(endPoint){
//     fetch(`${endPoint}/product`)
// }

// fetchDate(getProduct)

//notification system

let user = {
    name: "yogesh",
    email: "yogeshsinghchouhan07@gmail.com",
    phone : "1234567890"

}
function sendEmail(user){
    console.log('email sent to:', user.email)
}

function sendMsg(user){
    console.log('message sent to:', user.phone)
}
function sendWhatsappMsg(user){
    console.log('whatsapp message sent to:', user.phone)
}
sendWhatsappMsg(user) // whatsapp message sent to: 1234567890

// to create resuable and composable functions we can use higher order functions

function sendNotification(msg,sendTo){
    console.log(`${msg} sent to: ${sendTo}`)
}
sendNotification("Email", user.email) // message sent to: yogeshsinghchouhan07@gmail.com
sendNotification("Message", user.phone) // message sent to: 1234567890
sendNotification("Whatsapp Message", user.phone) // message sent to: 1234567890

/*****************************************/

//first class functions - functions that can be treated as first class citizens, they can be assigned to variables, passed as arguments to other functions, and returned from other functions


function greetHello(){
       return 'hello';
}
function greetHi(){
    return 'hi';
}
function greetWithName(fn,name){
    return fn() + " " + name;

}
console.log(greetWithName(greetHello,"yogesh")); // "hello yogesh"
console.log(greetWithName(greetHi,"yogesh")); // "hi yogesh"





// Question2.

// let users = [
//     {
//         name: "mkl",
//         age:12,
//     },
//     {
//         name: "mkl",
//         age:12,
//     },
//     {
//         name: "mkl",
//         age:12,
//     },
// ]


// let transformedHTML = users.map(obj=>{
//     html = `
//     <div>
//         <p>{obj.name}</p>
//         <p>{obj.age}</p>
//     </div>
//     `

//     return html;
// })


// Q.n 3:

// let arr = [5, 10, 2, 3];

// let result = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(result)


// let user = {
//     name: 'manas',
//     age: 23
// }


// function updateName(user, name) {
//     let newObj = { ...user, name }
//     return newObj
// }

// let updatedObj = updateName(user, 'muskan')
// console.log(updatedObj)


// let str = "manas";
// let reverseString = str.split('').reverse().join('')
// console.log(reverseString);

// let add2 = num => num + 2;
// let multiply5 = num => num * 5;
// let subtract10 = num => num - 10;

// let result = subtract10(multiply5(add2(6)))
// console.log(result)
