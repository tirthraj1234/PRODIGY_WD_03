let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (checkWinner()) {
            document.getElementById('result').innerText = `${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
        }
        if (!board.includes('')) {
            document.getElementById('result').innerText = "It's a draw!";
        }
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    if (!board.includes('')) {
        return true;
    }

    return false;
}

function newGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    document.getElementById('result').innerText = '';
}
