for(i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
    else{
        continue;
    
    }
}
//calculate vowel and and consonant in a string
let str="khatu ke mele chaalsya jii";
let vowel=0;
let consonant=0;
for(let ch of str){
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
        vowel++;
    }
    else if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
        consonant++;
    }
    else if(ch=='')
        {console.log("space not counted");

    }
}
console.log("Vowels: "+vowel);
console.log("Consonants: "+consonant);
// {
// let num = Number(prompt("Enter a number: "));
// let sum=0;
// for(i=1;i<=num;i++){
//     sum+=i;
// }



// console.log("Sum of first "+num+" natural numbers is: "+sum);


// }
// sum of num from m to n
// {
//     let m= Number(prompt("Enter starting number m: "));
//     let n= Number(prompt("Enter ending number n: "));
//     let sum=0;
    
//     for(i=m;i<=n;i++){
//         console.log(sum,i);
//         sum+=i;
//         console.log(sum)
//     }
//     console.log("Sum of numbers from "+m+" to "+n+" is: "+sum);
// }
// Number knock game
// let Number=7;
// let guess=Number(prompt("Guess a number between 1 to 10: "));
// while(guess!=Number){
//     console.log("Wrong guess! Try again.");
//     guess=Number(prompt("Guess a number between 1 to 10: "));
// }
// console.log("Congratulations! You guessed the correct number: "+Number);
// alert("Congratulations! You guessed the correct number: "+Number);
// password checker
let password = "Yogesh123";
let noOfAttempts = 0;
let userInput = null;

while(userInput !== password && noOfAttempts < 3){
    userInput = prompt("Enter your password: ");
    noOfAttempts++; 
    if(userInput === password){
        alert("Access Granted");
    }
    else{
        alert("Incorrect password. Try again.");
    }
}

if(noOfAttempts === 3 && userInput !== password){
    alert("Access Denied. Too many incorrect attempts.");
}
// factorial of a number
let number=Number(prompt("Enter a number to find its factorial: "));
let factorial=1;
for(i=1;i<=number;i++){
    factorial*=i;
}
console.log("Factorial of "+number+" is: "+factorial);
// 1
// 12
// 123
// 1234
// 12345
let rows=5;
for( let i=1;i<=rows;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+=j;
    }
    console.log(str);
}
