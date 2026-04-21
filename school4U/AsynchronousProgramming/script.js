// // synchronous vs asynchronous programming
// console.log("kaam 1");
// console.log('kaam 2');
// console.log("kaam 3");
// for(let i=0; i<100; i++){
//     // some heavy work
//     console.log("task",i);
// };
// console.log("task 4");  
// // in asynchronous programming, we can use setTimeout to simulate a delay
// console.log("kaam 1");
// console.log('kaam 2');

// setTimeout(() => {
//     console.log("asynchronous task 3");
// }, 8000);

// console.log("kaam4")
// setTimeout(() => {
//    console.log("kaam poora ho gya")
// }, 9000);
// // why do we get promise instead of data ?
// async function fetchData(){
//     let result =  await fetch("https://jsonplaceholder.typicode.com/users");
// console.log(await result.json());
// }
// fetchData();
// console.log("has the damn task done")
//  // this will log a promise, not the actual data
// //this is asynchronous as it doesn't block the execution of the next line of code, it will log the promise immediately and then fetch the data in the background. To get the actual data, we need to use .then() method or async/await syntax.


