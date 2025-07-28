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
    const randinx = Math.floor(Math.random() * 3);
    return option[randinx];
}


const playGam = (userChoice) => {

    const compChoice = gencompChoice();
    compSelect.innerText = `Computer choice: ${compChoice}`;
    userSelect.innerText = `Your choice: ${userChoice}`;

    if (userChoice === "rock" && compChoice === "paper") {
        result.innerText = "YOU LOST";
        compSc++
        compScore.innerText = compSc;
        result.style.backgroundColor = "rgba(255, 0, 0, 1)";
    } else if (userChoice === "rock" && compChoice === "scissors") {
        result.innerText = "YOU WIN";
        userSc++
        userScore.innerText = userSc;
        result.style.backgroundColor = "rgba(0, 255, 76, 1)";
    } else if (userChoice === "paper" && compChoice === "rock") {
        result.innerText = "YOU WIN";
        userSc++
        userScore.innerText = userSc;
        result.style.backgroundColor = "rgba(0, 255, 76, 1)";
    } else if (userChoice === "paper" && compChoice === "scissors") {
        result.innerText = "YOU LOST";
        compSc++
        compScore.innerText = compSc;
        result.style.backgroundColor = "rgba(255, 0, 0, 1)";
    } else if (userChoice === "scissors" && compChoice === "rock") {
        result.innerText = "YOU LOST";
        compSc++
        compScore.innerText = compSc;
        result.style.backgroundColor = "rgba(255, 0, 0, 1)";
    } else if (userChoice === "scissors" && compChoice === "paper") {
        result.innerText = "YOU WIN";
        userSc++
        userScore.innerText = userSc;
        result.style.backgroundColor = "rgba(0, 255, 4, 1)";
    } else {
        result.innerText = "GAME WAS DRAW";
        result.style.backgroundColor = "rgba(0, 26, 255, 1)";
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGam(userChoice);
    });
});

let but = document.querySelector("#button");

but.addEventListener("click", () => {

    userSc = 0;
    compSc = 0;
    userScore.innerText = userSc;
    compScore.innerText = compSc;

})

