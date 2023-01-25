var choice;
var scoreComp = 0;
var scorePlayer = 0;


function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    console.log(computerChoice); 
    if(computerChoice == 0){
        console.log('rock was picked by the computer');
        return 0;
    } else if(computerChoice == 1){
        console.log('paper was picked by computer');
        return 1;
    } else console.log('scissors was picked by the computer');
    return 2;  
}

function pickRock() {
    choice = 0;
    console.log('rock');
    console.log(choice);
}

function pickPaper() {
    choice = 1;
    console.log('paper');
    console.log(choice);
}

function pickScissors() {
    choice = 2;
    console.log('scissors');
    console.log(choice);
}

function playRPS(computerChoice) {
    console.log(choice +" "+ computerChoice)
    if (choice === 2 && computerChoice === 0){
        document.getElementById("result").textContent = "You Lose This Round";
        scoreComp++;
        if (scoreComp == 3) {
            document.getElementById("result").textContent = "Game Over";
            console.log('you lose buddy')
        }
    } else if (choice === 0 && computerChoice === 1){
        document.getElementById("result").textContent = "You Lose This Round";
        scoreComp++;
        if (scoreComp == 3) {
            document.getElementById("result").textContent = "Game Over";
            console.log('you lose buddy')
        }
    } else if (choice === 1 && computerChoice === 2){
        document.getElementById("result").textContent = "You Lose This Round";
        scoreComp++;
        if (scoreComp == 3) {
            document.getElementById("result").textContent = "Game Over";
            console.log('you lose buddy')
        }
    } else if (choice === 2 && computerChoice === 1){
        document.getElementById("result").textContent = "You Win This Round";
        scorePlayer++;
        if (scorePlayer == 3) {
            document.getElementById("result").textContent = "You Won the game!";
            console.log('you win pal')
        }
    } else if (choice === 0 && computerChoice === 2){
        document.getElementById("result").textContent = "You Win This Round";
        scorePlayer++
        if (scorePlayer == 3) {
            document.getElementById("result").textContent = "You Won the game!";
            console.log('you win pal')
        }
    } else if (choice === 1 && computerChoice === 0){
        document.getElementById("result").textContent = "You Win This Round";
        scorePlayer++;
        if (scorePlayer == 3) {
            document.getElementById("result").textContent = "You Won The Game!";
            console.log('you win pal')
        }
    } else if (choice === computerChoice){
        document.getElementById("result").textContent = "Tie, Try Again!";
    } else {        
        document.getElementById("result").textContent = "Choose Something";
    }
}
