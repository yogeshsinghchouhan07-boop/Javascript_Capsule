//strings
//are piece of text
//anything inside "" is a string
// her string can be written in single quote(''


//) or backtics (``)
// {console.log("hii");
// let str="Yogesh";
// let str1="Singh";
// let str3=`chouhan`;
// console.log(str,typeof str);
// let alpha="yogesh"+"singh"+"chouhan"+20
// console.log(alpha);
// console.log(alpha,typeof alpha);
// let beta=alpha + " Rajasthani ";
// console.log(beta);
// // use of backtics
// let firstName="yogesh";
// let middleName="singh";
// let lastName="chouhan";
// let fullName= `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);
// // template interpulation is shown above
// let exp=`str=${2+3-5+7+9}`;
// console.log(exp);
// }
// //constructor method
// {let str = new String("Yogesh"); // here yogesh is stored in form of object
// console.log(str) ;
// // indexing in string happens in this method like arrays starts from zero
// let str1="Hello \nhow are you";
// console.log(str1);
// console.log(str1,str1.length); // here \n is one character
// console.log("hello \" Yogesh");}

// let str="Jai Shree shyam";
// console.log(str[1]);
// console.log(str[3]);
// console.log(str[5]);

// str[5]="a";
// console.log(str) // we cant manipulate string or immutable
// for(let ch of str){
//     console.log(ch)
// }

// let str2="";
// for(let ch of str){
//     str2=str2+ ch + " ";
//     console.log(str2 )
// }
// for(let key in str){
//     console.log(key)
// }
// //string properties
// // str.length = tells about length of String
// // str.toUppercase
// // str.toLowerCase= convert each letter toLowerCase
// // str.trim()= removes whitespeces
// // str.concat()= add str1 wity str2
// // str.includes()=checks if string contains given piece of string
// // str.charAt()= give character at given indexed
// // str.replace(old,new)= replaced first mached part 
// // str.replaceAll(old,new)=replace all matched 
// // str.slice(Form,to)=cut the part of string
// // str.split()=used to split a string into parts and turn it into array 
// //methods
// {let str="   Jai Shree Ram  ";
// console.log(str.length);
// str.toUpperCase()
// console.log(str);
// // strings are immutable so it will not change original string
// strCopy=str.toUpperCase();
// console.log(str);
// let str1=strCopy.toLowerCase();
// console.log(str1);
// let str2=str.trim();
// console.log(str2,str2.length);
// let fullName=str2.concat("  jai bajrangbali");
// console.log(fullName);
// let isPresent=str.includes("Shree");
// console.log(isPresent);
// console.log(str.replace("Ram","Shyam"));
// let userName="@yogeshsinghchouhan";
// let NewUserName=userName.slice(1);
// console.log(NewUserName);
// let smallPart=userName.slice(1,6);
// console.log(smallPart);
// let words="I am learning javascript";
// let wordsArray=words.split(" ");
// console.log(wordsArray);
// let subString=words.substring(2,6);
// console.log(subString);
// // difference between slice and substring is that slice can take negative indexing but substring cant

// }}
// //question#1
// let applicantName=prompt("Enter your name");
// let loginUserNamr=`@${applicantName.trim().replace(" ","").toLowerCase()}_${applicantName.length}   `;
// //q2
// //case insensitive character check
// let sentence=prompt("Enter a sentence");
// let charToBeChecked=prompt("Enter character to be checked");
// let count=0;
// for(let ch of sentence){
//     if(ch.toLowerCase()==charToBeChecked.toLowerCase()){    
//         count++;
//     }
// }
// console.log(`character ${charToBeChecked} is present ${count} times in sentence`);

// //question#3
// let sentence1=prompt("Enter a sentence");
// let wordPresent=sentence1.split(" ");
// let noOfBlanks=0;
// for(let ch of sentence1){
//     if(ch==" "){
//         noOfBlanks++;
//     }
// }
// console.log(`number of words in sentence is ${noOfBlanks+1}`);
//question#4
let input=prompt("enter a string");
let char =prompt("enter character to be checked");
let count=0;
for(let index in input){
    if(input[index].toLowerCase() === char.toLowerCase()){
        console.log(index);
        count++;
    }   
}
console.log(`character ${char} is present ${count} times in string`);