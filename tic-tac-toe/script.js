const ws = new WebSocket('ws://192.168.0.107:8080');

let playerNumber;
let currentPlayer = 'X';

ws.onopen = () => {
    console.log('Connected to server');
};

ws.onmessage = (message) => {
    const data = JSON.parse(message.data);

    if (data.type === 'playerNumber') {
        playerNumber = data.playerNumber;
        currentPlayer = playerNumber === 1 ? 'X' : 'O';
    } else if (data.type === 'move') {
        const { index, symbol } = data;
        boxes[index].innerText = symbol;
        boxes[index].disabled = true;
        checkWinner();
    } else if (data.type === 'reset') {
        resetGame();
    }
};

const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-butn");
const winnerMessage = document.getElementById("winnerMessage");

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (!box.innerText && (currentPlayer === 'X' || currentPlayer === 'O')) {
            box.innerText = currentPlayer;
            box.disabled = true;
            checkWinner();

            ws.send(JSON.stringify({ type: 'move', index, symbol: currentPlayer }));
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            winnerMessage.innerText = `The winner is ${boxes[a].innerText === 'X' ? 'Player 1' : 'Player 2'}`;
            disableAllButtons();
            return;
        }
    }

    if (Array.from(boxes).every(box => box.innerText)) {
        winnerMessage.innerText = "It's a draw!";
    }
};

const disableAllButtons = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetBtn.addEventListener("click", () => {
    ws.send(JSON.stringify({ type: 'reset' }));
    resetGame();
});

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    currentPlayer = playerNumber === 1 ? 'X' : 'O';
    winnerMessage.innerText = "";
};
