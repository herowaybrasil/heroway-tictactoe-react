let nextPlayer = 'x';
let moves = 0;
const board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const cellsArray = Array.from(cells);
cellsArray.forEach((cell) => {
  cell.addEventListener('click', play);
});

// ------ //

function play(e) {
  const id = e.target.id;

  if(board[id] || gameOver) {
    return;
  }

  board[id] = nextPlayer;
  e.target.innerText = nextPlayer;
  e.target.style.cursor = 'not-allowed';
  moves += 1;

  nextPlayer = nextPlayer === 'x' ? 'o' : 'x';

  const winner = checkWinner();
  if(winner) {
    declareWinner(winner);
  }
}

function declareWinner(winner) {
  gameOver = true;
	document.getElementById("message").innerText = winner;
}

function checkWinner() {
  const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  if (moves === board.length) {
    return 'Empate';
  }

  for (let index = 0; index < winners.length; index++) {
    const [a,b,c] = winners[index];

    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return `Vencedor: ${board[a].toUpperCase()}`;
    }
  }
}
