//story game
let playAgain = prompt("Do you want to play a game? (yes/no)").toLowerCase();
if(playAgain !== "yes"){
    alert("Maybe next time!");
    throw new Error("Game exited by user.");
}
else{
    alert("Great! Let's start the adventure.");
    alert("you wake dark forest");
let choice = prompt("Do you want to go left or right? (type left or right)").toLowerCase();
if(choice==="left"){
    alert("you see a shiny thing in the mud");
    let choice = prompt("Do you want to pick it up? (type yes or no)").toLowerCase();
    if(choice==="yes"){
        alert("you found a treasure chest full of gold! you win!");}
    else{
        alert("you walk further and fall into a pit. Game over!");}
    }
    else if(choice==="right"){
        alert("you encounter a wild beast!");
        let choice = prompt("Do you want to fight or run? (type fight or run)").toLowerCase();
        if(choice==="fight"){
            alert("you bravely fight the beast and emerge victorious! you win!");}
        else{
            alert("you run away safely, but miss out on potential treasure. Game over!");}
    }
else{
    alert("invalid choice. Game over!");}

}
playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
