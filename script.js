function getComputerChoice(){
    //we create a variable called c which takes a random value from 0-1 through Math.random. We multiply this with 10 to get numbers
    //through 0-9, we subtract 1 to get 0-8 which is 9 values so easily divisible by 3 giving us equal chances.
    //In cases where the random number was 0, subtracting 1 made it -1.
    //After getting this number we divide by 3 to get either 0 for 0-2, 1 for 3-5,2 for 6-8 and -1 for the one case where it goes negative.
    //As this is 4 choices, we do Math.abs as it will turn the -1 into 1 and not affect the postive values giving us an equal 1/3 chance.  
    // 0 gives us rock,1 gives scissors and else which is now only 2 gives paper;
    let c = Math.abs(Math.floor((Math.random()*10) -1));
    c = Math.floor(c/3);
    if(c===0){
        return "Rock";
    }
    else if(c===1){
        return "Scissors";
    }
    else{
        return "Paper";
    }
}

function getPlayerChoice(){
    //This just returns the value that you get from the prompt.
    return prompt("Enter your choice.");
}

function showResult(c,p){
    //We convert both human and computer choice to lower case (actually could have made the computer choice lower case to begin with.)
    //We check for each computer choice. If the human choice beats it, we display you win and increment the humanScore global variable.
    //If the player loses we display the losing message and increment the computer choice.
    //In the case of draw we just display draw.
    let computer = c.toLowerCase();
    let player = p.toLowerCase();

    if(computer==="rock"){
        if(player==="scissors"){
            computerScore++;
            return `You Lose! ${computer} beats ${player}`;
        }
        else if(player==="paper"){
            humanScore++;
            return `You Win! ${player} beats ${computer}`;
        }
        else{
            return `Draw!${player} is the same as ${computer}`;
        }
    }

    if(computer==="scissors"){
        if(player==="paper"){
            computerScore++;
            return `You Lose! ${computer} beats ${player}`;
        }
        else if(player==="rock"){
            humanScore++;
            return `You Win! ${player} beats ${computer}`;
        }
        else{
            return `Draw!${player} is the same as ${computer}`;
        }
    }

    if(computer==="paper"){
        if(player==="rock"){
            computerScore++;
            return `You Lose! ${computer} beats ${player}`;
        }
        else if(player==="scissors"){
            humanScore++;
            return `You Win! ${player} beats ${computer}`;
        }
        else{
            return `Draw!${player} is the same as ${computer}`;
        }
    }

}

function playRound(){
    //We get the computer choice and player choice by invoking the functions and compare in showResult().
    //We store the result and display it to tell the player what happened.
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let result = showResult(computerChoice,playerChoice);
    console.log(result);
}

function playGame(){
    //This calls the playRound() in a loop.
    //After the loop is done, we compare the global variables listed below to check who won overall.
    for(i=0;i<5;i++){
        playRound();
        if(humanScore===3){
            return console.log("You win!! You bested the Computer!");
        }
        else if(computerScore===3){
            return console.log("You Lose! Better luck next time :(( ");
        }
    }
    if(humanScore>computerScore){
        return console.log("You win!! You bested the Computer!");
    }
    else if(computerScore>humanScore){
        return console.log("You Lose! Better luck next time :(( ");
    }
    else{
        return console.log("Well this is new, A DRAW!! You said the same thing as the machine 5 times in a row!")
    }
    

}
//The global variables that are accessed by the showResult().
let humanScore =0;
let computerScore =0;

//Function to start the game.
playGame();


