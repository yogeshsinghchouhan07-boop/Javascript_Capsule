{//Array
// array are a list like objects used to store multiple values in a single variable

// Creating an Array
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']
// Accessing Array Elements
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[1]); // Output: 'Banana' 
//array are stored in heap memory
//heap memory is a region of a computer's memory that is used for dynamic memory allocation where blocks of memory are allocated and freed in an arbitrary order.

// Modifying Array Elements
fruits[2] = 'Grapes';
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes']
//how dynamic memory allocation works in heap memory
// When you modify an array, the JavaScript engine may allocate new memory in the heap to accommodate the changes, especially if the array grows in size. The old memory may be marked for garbage collection if there are no more references to it.
 let arr=[1,"two",3,true];
 console.log(arr); // Output: [1, "two", 3, true]
 let inArray=["yogi",[1,2,3],{name:"yogesh"}];
 console.log(inArray); // Output: ["yogi", [1, 2, 3], {name: "yogesh"}]
 letcArray=new Array(5).fill(0);
 console.log(letcArray); // Output: [ <5 empty items> ]
//arrays are objects in JavaScript
console.log(typeof fruits); // Output: 'object'
console.log(Array.isArray(fruits)); // Output: true
//arrays are mutable
fruits.push('Mango');
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
let colors=['Red','Green','Blue'];
for(let color of colors){
    console.log(color);
}
//arr.push() method adds one or more elements to the end of an array and returns the new length of the array.
//arr.pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//arr.shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//arr.unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let numbers=[1,2,3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]
numbers.pop();
console.log(numbers);

// Output: [1, 2, 3]
numbers.shift();
console.log(numbers);

// Output: [2, 3]
numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 3]
//arr.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//array methods and properties
let sampleArray=[10,20,30,40,50];
let newArray=sampleArray.slice(1,4);
console.log(newArray);
// Output: [20, 30, 40]
console.log(sampleArray.length); // Output: 5
//arr.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
sampleArray.splice(2,1,25,35);//splice(start, deleteCount, item1, item2, ...)
console.log(sampleArray); // Output: [10, 20, 25, 35, 40, 50]
//here, at index 2, one element (30) is removed and two new elements (25, 35) are added.
// join() method joins all elements of an array into a string and returns this string.
let joinedString=fruits.join(", ");
console.log(joinedString); // Output: 'Apple, Banana, Grapes, Mango'
//spread operator to copy an array
let copiedArray=[...fruits];
console.log(copiedArray); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']
//index of() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index=fruits.indexOf('Banana');
console.log(index); // Output: 1
//reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
fruits.reverse();
console.log(fruits); // Output: ['Mango', 'Grapes', 'Banana', 'Apple']
//find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise, undefined is returned.
let foundFruit=fruits.find(fruit=>fruit.startsWith('G'));
console.log(foundFruit); // Output: 'Grapes'
//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray=[1,2,[3,4,[5,6]]];
let flatArray=nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
//sorting and unsorting an array
//sort() method sorts the elements of an array in place and returns the sorted array.
let unsortedArray=[3,1,4,2,5];
let heroes=['Spiderman','Batman','Ironman','Superman'];
unsortedArray.sort();
console.log(unsortedArray);
// here no are strings so it sorts based on unicode values
heroes.sort();
console.log(heroes);
// arranged in ascending order and alphabetical order respectively
// in case of numbers we can also provide a compare function to sort() method
unsortedArray.sort((a,b)=>b-a);
console.log(unsortedArray); // Output: [5, 4, 3, 2, 1]
// for ascending order we can use (a,b)=>a-b
//if a-b is negative then a is sorted before b
//if a-b is positive then b is sorted before a
//swapping happens based on the return value of the compare function
//ex : let arr=[10,5,20]
//arr.sort((a,b)=>a-b) will sort in ascending order
//10-5=5 (positive) => 5 before 10






//special array methods and functional array methods
//map(), filter(), reduce()
//map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// map(element, index, array) => newElement
// step 1: iterate through each element of the array
// step 2: apply the provided function to each element
// step 3: return a new array with the transformed elements
//example: let numbersArray=[1,2,3,4,5];
// numbersArray.map(num=>num*num) will return a new array where each element is the square of the corresponding element in numbersArray
// here num is the current element being processed in the array, and num*num is the transformation applied to each element, resulting in a new array of squared values.
// map() method does not modify the original array, it returns a new array with the transformed elements.
let numbersArray=[1,2,3,4,5];
let squaredArray=numbersArray.map(num=>num*num);
console.log(squaredArray);
// Output: [1, 4, 9, 16, 25]
//forEach() method executes a provided function once for each array element.
numbersArray.forEach(num=>console.log(num));
// Output: 1 2 3 4 5 (each number on a new line)
//filter() method creates a new array with all elements that pass the test implemented by the provided function.

let testArray=[10,15,20,25,30,];
let filteredArray = testArray.filter(num=>num%2===0);
console.log(filteredArray);
// Output: [10, 20, 30]
// here num%2===0 is the test condition that checks if the number is even. The filter() method iterates through each element in testArray, applies the test condition, and returns a new array containing only the elements that satisfy the condition (in this case, the even numbers).
// can be used as 
let rawArray=[1,2,3,4,5,6,7,8,9,10];
let oddArray=rawArray.filter((num)=> {
    return num%2!==0;
});
console.log(oddArray);
// Output: [1, 3, 5, 7, 9]
//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// reduce(accumulator, currentValue, currentIndex, array) => newAccumulator
// step 1: iterate through each element of the array
// step 2: apply the reducer function to each element along with an accumulator that holds the intermediate result
// step 3: return a single output value after processing all elements
let toReduceArray=[1,2,3,4,5];
let result=toReduceArray.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0);
console.log(result);
// Output: 15
// here prevValue is the accumulated value from the previous iterations (starting with the initial value of 0), and currentValue is the current element being processed in the array. The reducer function adds the currentValue to the prevValue, resulting in a new accumulated value that is passed to the next iteration. After processing all elements, reduce() returns the final accumulated value, which in this case is the sum of all numbers in toReduceArray.
}
//question1
let arr=[55,65,78,90,45];
let sum=arr.reduce((acc,cur)=>{
    return acc+cur; 
})
let avg=sum/arr.length;
console.log(avg);
// Output: 66.6
let length=5;
let testArray=new Array(5);
console.log(testArray); // Output: [ <5 empty items> ]
let filledArray=new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]
let n=25;
let arr1= new Array(25).fill(0);
arr1.forEach((value,index)=>{
    arr1[index]=index+1;
});
console.log(arr1); // Output: [1, 2, 3, ..., 25]