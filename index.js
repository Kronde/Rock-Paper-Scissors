document.addEventListener("DOMContentLoaded", function() {

    let playerGuess;
    let playerText = document.getElementById("player-screen")
    let playerWins = 0;
    let playerWinCount = document.getElementById("player-win-count");

    let computerGuess;
    let computerText = document.getElementById("computer-screen");
    let computerWins = 0;
    let computerWinCount = document.getElementById("computer-win-count");

    let button = document.querySelectorAll(".btn")

    let gameStatutText = document.getElementById("game-statut-text")


    playerWinCount.textContent = playerWins;
    computerWinCount.textContent = computerWins;

    button.forEach(function(btn){
        btn.addEventListener("click", function(){
            playerGuess = btn.value;
            playerText.textContent = playerGuess;
            computerPick();
        })
    })

    function computerPick(){
        let randomNumber = Math.floor(Math.random() * 3);

        switch(randomNumber){
            case 0:
                computerGuess = "rock";
                break;
            case 1:
                computerGuess = "paper";
                break;
            case 2:
                computerGuess = "scissors";
                break;
        }
        
        computerText.textContent = computerGuess
        determineWinner();
    }

    function determineWinner(){
        if (playerGuess == computerGuess){
            gameStatutText.textContent = "It's a draw !";
        }
        else if (playerGuess === "rock" && computerGuess === "scissors"){
            gameStatutText.textContent = "Player Win !";
            playerWins ++;
            playerWinCount.textContent = playerWins;
        }
        else if (playerGuess === "rock" && computerGuess === "paper"){
            gameStatutText.textContent = "Computer Win !";
            computerWins ++;
            computerWinCount.textContent = computerWins;
        }
        else if (playerGuess === "paper" && computerGuess === "rock"){
            gameStatutText.textContent = "Player Win !";
            playerWins ++;
            playerWinCount.textContent = playerWins;
        }
        else if (playerGuess === "paper" && computerGuess === "scissors"){
            gameStatutText.textContent = "Computer Win !"
            computerWins ++;
            computerWinCount.textContent = computerWins;
        }
        else if(playerGuess === "scissors" && computerGuess === "rock"){
            gameStatutText.textContent = "Computer Win !";
            computerWins ++;
            computerWinCount.textContent = computerWins;
        }
        else if (playerGuess === "scissors" && computerGuess === "paper"){
            gameStatutText.textContent = "Player Win !";
            playerWins ++;
            playerWinCount.textContent = playerWins;
        }
    }

});
