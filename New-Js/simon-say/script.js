let gameSeq = [];
let userSeq = [];
let buttons = ["yellow", "red", "blue", "green"];
let start = false;
let level = 0;
let para = document.querySelector("p");
let btns = document.querySelectorAll(".btn");

document.addEventListener("keypress", () => {
    if (start == false) {
        console.log("game started");
        start = true;
        levelUp();
    }
});

function gameflashButton(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userflashButton(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    para.innerText = `Level ${level}`;
    let index = Math.floor(Math.random() * 3);
    let randomColor = buttons[index];
    let randomButton = document.querySelector(`.${randomColor}`);
    // console.log(index);
    // console.log(randomColor);
    // console.log(randomButton);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameflashButton(randomButton);
}

function resetGame() {
    start = false
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function checkAns(index) {
    if (userSeq[index] == gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        para.innerHTML = `Game Over! Your score is <b>${level}</b> <br> Press any key to start new game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        resetGame();
    }
}

function buttonPress() {
    let btn = this;
    userflashButton(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

for (btn of btns) {
    btn.addEventListener("click", buttonPress);
}