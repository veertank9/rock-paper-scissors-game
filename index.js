const choices = document.querySelectorAll(".choice");

let userSc = 0;
let compSc = 0;

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const result = document.querySelector(".dis-result");
const compSelect = document.querySelector("#comp-select");
const userSelect = document.querySelector("#user-select");

const gencompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random() * 3)];
};

const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    compSelect.innerText = `Computer choice : ${compChoice}`;
    userSelect.innerText = `Your choice : ${userChoice}`;

    if (userChoice === compChoice) {
        result.innerText = "GAME WAS DRAW";
        result.style.backgroundColor = "blue";
    } 
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        result.innerText = "YOU WIN";
        result.style.backgroundColor = "green";
        userSc++;
        userScore.innerText = userSc;
    } 
    else {
        result.innerText = "YOU LOST";
        result.style.backgroundColor = "red";
        compSc++;
        compScore.innerText = compSc;
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});

document.querySelector("#button").addEventListener("click", () => {
    userSc = 0;
    compSc = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
    result.innerText = "Lets play your move";
    result.style.backgroundColor = "transparent";
});
