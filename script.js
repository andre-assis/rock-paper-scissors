let computerScore, humanScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    return numberToRPS(choice);
}

function getHumanChoice() {
    choice = prompt("0 - Rock, 1 - Paper, 2 - Scissor");
    return numberToRPS(choice);
}

function playRound(humanChoice, computerChoice) {

}