// NUMBER
let num = 7891235628;
console.log(num);

Number //is an builtin object;
let num1= new Number(64451658)
//new number will make an object in the console

console.log(num1);
let num2='sher';
console.log(num2)
console.log(typeof num2)


// Number  properties and method
//How to apply
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.EPSILON)
console.log(Number.NaN)
let num3='123.321'
console.log(Number.parseInt(num3))
console.log(Number.parseFloat(num3))
let marks = 1566564474.4511
console.log(marks.toFixed(2))
//after point it will give answer till 2number
// toExponential(3) exp. TO 4DIGITS
console.log(marks.toPrecision(10))
//num.toString() used to convert in string;
console.log(num1.valueOf())
////// MATHS IN JAVASCRIPT
//(OBJECT HOTA HAI MATHS )
/*

Math.round(x) roundof to nearest int
Math.floor(x) rounds down
Math.ceil(x) rounds up
math.abs(x) absolute value (modulus)
Math.sqrt(x)
Math.pow(x,y)
math.min(...arguments)
math.max(...argus)
Math.random() random number  O<= NUMBER <1




*/
// Random number btw 0 and 1
 let min=5;
 let max=25;
let rand = Math.floor(Math.random()*(max-min+1)+min);

console.log(rand)
 // date and time in javascript4
 //in iso format 
//  YYYY-MM-DDTHH:mm:ss.sssZ
 // here T is seperator and Z is timezone((UTC)
 let date = new Date();
 console.log(date);
 console.log(date.toString());
//Unix epoch
//it is the zero point for the time for most OS
// it is 1st Jan 1970 00:00:00 UTC
//Date.now() gives the number of milliseconds since the unix epoch
console.log(Date.now())

//creating a date object
let date1= new Date();
console.log(date1) //current date and time
//ISO format
let date2 = new Date('2024-06-01');
console.log(date2)
let date3 = new Date('2024-06-01T10:30:00');
console.log(date3)
let date4 = new Date(2024,5,1) //month start from 0
console.log(date4)
let date5 = new Date(2024,5,1,10,30,0) // months are zero indexed injs
console.log(date5)
let dateInd= new Date('2025/02/03  06:30:00')
console.log(dateInd.toISOString())
let date6=new Date(1774928407788)
console.log(date6.toLocaleString())
console.log(date6.getFullYear())
console.log(date6.getDate())
console.log(date6.getMonth())  // zero indexed
console.log(date6.getTimezoneOffset()/60) // minutes(UTC-Locale)
console.log(date6.getMilliseconds());
date6.setFullYear('2027');
console.log(date6.getFullYear())
date6.setMonth('10');
console.log(date6.getMonth())
//how to get time current


let date7 = new Date();
console.log(date.getTime()/1000/60/60/24/365)
let date8 = new Date().getTime();
console.log(date8)
 // date.toLocaleString is used to see time clearly
 //date.toUTCstring() to see time in utc format
 //tolocaledatestring
 //tolocaleTimestring
 //toString
 //toISOString() (gives in UTC)
 //custom date//////////////////////////
 console.log(`${date.getDate()}  day ${date.getMonth()} month ${date.getFullYear()} year`)
//difference
let date9 = new Date("2026-01-01T00:00:00");
console.log(date9.toISOString())
console.log(date9.toLocaleString())