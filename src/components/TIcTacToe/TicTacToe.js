/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import '../../styles/TicTacToe.scss';
import Form from './Form';


const TicTacToe = () => {

  const [board, setBoard] = useState(Array(9).fill(''));

  const [count, setCount] = useState(0);

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const [winnerName, setWinnerName] = useState('');

  const counter = () => {
    setCount(count + 1);
  };

  const renderSquare = board.map((square, index) => {
    return (
      <div key={index} id={index} className={`board__square board__square--${index} ${square}`} >
      </div>
    )
  })

  const whoPlays = (index) => {
    counter();
    if (count % 2 === 0) {
      board[index] = 'spiderduck';
    } else {
      board[index] = 'batduck';
    }
    setBoard([...board]);

  };

  useEffect(
    () => {
      const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for (let i = 0; i < winnerLines.length; i++) {
        const [a, b, c] = winnerLines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinnerName(board[a])
        }
      }
    }, [board])

  const updatePlayer1 = (value) => {
    setPlayer1(value);
  };
  const updatePlayer2 = (value) => {
    setPlayer2(value);
  };

  return (
    <main className='main main__tictactoe'>
      <Form
        updatePlayer1={updatePlayer1}
        updatePlayer2={updatePlayer2}
        player1={player1}
        player2={player2}
      />
      <div className='tictactoe__board' onClick={winnerName === '' ? (ev) => whoPlays(ev.target.id) : () => { }}>
        {renderSquare}
      </div>
      < h2 className={winnerName === '' ? 'hidden' : ''}>
        {
          `Ha ganado 
        ${winnerName === 'spiderduck'
            ? player1 || 'Jugador 1'
            : player2 || 'Jugador 2'
          }`
        }
      </h2 >
    </main >
  );
};

export default TicTacToe;
