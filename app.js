let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
    
    // rock, paper, scissors
};
const drawGame = () => {
 
    msg.innerText = "Game was draw.. play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `you win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else { 
        compScore++;
        computerScorePara.innerText = compScore;
  
        msg.innerText = `you lose. ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer Choice - modular way
    const computerChoice = genComputerChoice();
    console.log("computer choice = ", computerChoice);

    if(userChoice === computerChoice) {
        // Draw game
         drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
           userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
           userWin =  computerChoice === "scissors" ? false : true;
        } else {
            // paper, rock
           userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};





choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});