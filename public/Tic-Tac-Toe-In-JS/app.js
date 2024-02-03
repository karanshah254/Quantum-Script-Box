let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGameButton = document.querySelector('#new-button');
let msgContainer = document.querySelector('.msg-container');
let para = document.querySelector('#msg');
let turn0 = true; // playerX & playerO

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// on click of all boxes event happens
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("boxes are clicked");
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        }
        else {
            box.innerText = 'X';
            turn0 = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

// to reset game in between
const resetGame = () => {
    turn0 = true;
    enaableBoxes();
    msgContainer.classList.add('hide');
}

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enaableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// show winner on web page
const showWinner = (winner) => {
    msg.innerText = `Congratualation Winner is player ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}

// check pattern and decide winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let postion1 = boxes[pattern[0]].innerText;
        let postion2 = boxes[pattern[1]].innerText;
        let postion3 = boxes[pattern[2]].innerText;

        if (postion1 != "" && postion2 != "" && postion3 != "") {
            if (postion1 === postion2 && postion2 === postion3) {
                showWinner(postion1);
            }
        }
    }
}

// event to start new game or reset game
newGameButton.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);