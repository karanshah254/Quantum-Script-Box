let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
let userCount = document.querySelector('#user');
let computerCount = document.querySelector('#computer');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const computerChoice = computerGame();
    if (userChoice === computerChoice) {
        msg.innerText = 'Game is tie. Play again.';
        msg.style.backgroundColor = "#372554";
    } else {
        let userWin = true;
        if (userChoice === 'Rock') {
            userWin = computerChoice === 'Paper' ? false : true;
        }
        else if (userChoice === 'Paper') {
            userWin = computerChoice === 'Scissors' ? false : true;
        }
        else {
            userWin = computerChoice === 'Rock' ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

const computerGame = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userCount.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerCount.innerText = computerScore;
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}