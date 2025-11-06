const choices = ['Rock', 'Paper', 'Scissors'];
const playerMove = document.querySelector(".playerMove");
const computerMove = document.querySelector(".computerMove");
const result = document.querySelector(".result");
const winsScoreDisplay = document.querySelector(".winsScoreDisplay");
const lossesScoreDisplay = document.querySelector(".lossesScoreDisplay");
let winsScore = 0;
let lossesScore = 0;

winsScore = parseInt(localStorage.getItem("winScore")) || 0;
lossesScore = parseInt(localStorage.getItem("lossesScore")) || 0;

winsScoreDisplay.textContent = winsScore;
lossesScoreDisplay.textContent = lossesScore;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerMove.textContent = `Your Move: ${playerChoice}`;
    computerMove.textContent = `Computer's Move: ${computerChoice}`;

    let gameResult = "";

    if (playerChoice === computerChoice) {
        gameResult = "Tie!"
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        gameResult = "You Win! 🎉";
    } else {
        gameResult = "You Lose! 😢";
    }

    result.textContent = `Result: ${gameResult}`;

    result.classList.remove("greenText", "redText");

    if (gameResult === "You Win! 🎉") {
        result.classList.add("greenText");
        winsScore++;
        winsScoreDisplay.textContent = winsScore;
        localStorage.setItem("winScore", winsScore);
    }
    else if (gameResult === "You Lose! 😢") {
        result.classList.add("redText");
        lossesScore++;
        lossesScoreDisplay.textContent = lossesScore;
        localStorage.setItem("lossesScore", lossesScore);
    }
}

function resetScore() {
    winsScore = 0;
    lossesScore = 0;
    winsScoreDisplay.textContent = winsScore;
    lossesScoreDisplay.textContent = lossesScore;
    localStorage.setItem("winScore", winsScore);
    localStorage.setItem("lossesScore", lossesScore);
}