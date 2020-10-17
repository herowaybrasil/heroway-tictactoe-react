import React from 'react';

import { Logo } from '../Logo';

function Board() {
  const [message, setMessage] = React.useState('A grande batalha começou!');
  
  const [player, setPlayer] = React.useState('x');
  const [moves, setMoves] = React.useState(0);

  const [game] = React.useState([['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8']]);
  const [board, setBoard] = React.useState(['', '', '', '', '', '', '', '', '']);

  const [gameOver, setGameOver] = React.useState(false);

  React.useEffect(() => {
    const winner = checkWinner();

    if(winner) {
      updateWinner(winner);
    }
  }, [board]);

  function play(cellId) { 
    if(board[cellId] || gameOver) {
      return;
    }
  
    const newBoard = [...board];
    newBoard[cellId] = player;

    setBoard(newBoard);
    setMoves(moves + 1);
    setPlayer(player === 'x' ? 'o' : 'x');
  }

  function updateWinner(winner) {
    setGameOver(true);
    setMessage(winner);
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
      return 'Foi um empate épico!';
    }
  
    for (let index = 0; index < winners.length; index++) {
      const [a, b, c] = winners[index];
  
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return `O grande vencedor é o ${board[a].toUpperCase()}`;
      }
    }

    return null;
  }

  return (
    <div className="board">
      <Logo />
      <div className="message">{message}</div>

      <table>
        {game.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((cell) => {
                const value = board[cell];
                const isAllowed = value ? 'not-allowed' : 'pointer';

                return (
                  <td
                    key={cell}
                    className="cell"
                    style={{ cursor: isAllowed }}
                    onClick={() => play(cell)}
                  >
                    {value}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </table>
      <button className='replay'>Replay</button>
    </div>
  )
}

export default Board;