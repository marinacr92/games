/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import '../styles/TicTacToe.scss';
import Form from './Form';

const TicTacToe = () => {

  const [count, setCount] = useState(0);

  const [player, setPlayer] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [winnerName, setWinnerName] = useState('');

  const counter = () => {
    setCount(count + 1);
  };

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const whoPlays = (x, y) => {
    if (count % 2 === 0) {
      player[x][y] = 'even';
    } else {
      player[x][y] = 'odd';
    }
    setPlayer([...player]);
  };

  const handleClick = (x, y) => {
    if (player[x][y] === '') {
      counter();
      whoPlays(x, y);
    }
  };

  useEffect(() => {
    if (
      player[0][0] === player[0][1] &&
      player[0][1] === player[0][2] &&
      player[0][0] !== ''
    ) {
      setWinnerName(player[0][0]);
    } else if (
      player[1][0] === player[1][1] &&
      player[1][1] === player[1][2] &&
      player[1][0] !== ''
    ) {
      setWinnerName(player[1][0]);
    } else if (
      player[2][0] === player[2][1] &&
      player[2][1] === player[2][2] &&
      player[2][0] !== ''
    ) {
      setWinnerName(player[2][0]);
    } else if (
      player[0][0] === player[1][0] &&
      player[1][0] === player[2][0] &&
      player[0][0] !== ''
    ) {
      setWinnerName(player[0][0]);
    } else if (
      player[0][1] === player[1][1] &&
      player[1][1] === player[2][1] &&
      player[0][1] !== ''
    ) {
      setWinnerName(player[0][1]);
    } else if (
      player[0][2] === player[1][2] &&
      player[1][2] === player[2][2] &&
      player[0][2] !== ''
    ) {
      setWinnerName(player[0][2]);
    } else if (
      player[0][0] === player[1][1] &&
      player[1][1] === player[2][2] &&
      player[0][0] !== ''
    ) {
      setWinnerName(player[0][0]);
    } else if (
      player[0][2] === player[1][1] &&
      player[1][1] === player[2][0] &&
      player[0][2] !== ''
    ) {
      setWinnerName(player[0][2]);
    }
  }, [player]);

  const updatePlayer1 = (value) => {
    setPlayer1(value);
  };
  const updatePlayer2 = (value) => {
    setPlayer2(value);
  };

  return (
    <main className='main'>
      <Form
        updatePlayer1={updatePlayer1}
        updatePlayer2={updatePlayer2}
        player1={player1}
        player2={player2}
      />

      <table border="5">
        <tr>
          {/* eso no debería pintarse con un map? en lugar de un array de arrays como coordenadas hacer un array simple, y a la hora de pintarlo pasar como argumento el indice de la casilla donde se va a pintar */}
          <td
            onClick={() => handleClick(0, 0)}
            className={`table ${player[0][0]}`}
          ></td>
          <td
            className={`table ${player[0][1]}`}
            onClick={() => handleClick(0, 1)}
          ></td>
          <td
            className={`table ${player[0][2]}`}
            onClick={() => handleClick(0, 2)}
          ></td>
        </tr>
        <tr>
          <td
            onClick={() => handleClick(1, 0)}
            className={`table ${player[1][0]}`}
          ></td>
          <td
            onClick={() => handleClick(1, 1)}
            className={`table ${player[1][1]}`}
          ></td>
          <td
            onClick={() => handleClick(1, 2)}
            className={`table ${player[1][2]}`}
          ></td>
        </tr>
        <tr>
          <td
            onClick={() => handleClick(2, 0)}
            className={`table ${player[2][0]}`}
          ></td>
          <td
            onClick={() => handleClick(2, 1)}
            className={`table ${player[2][1]}`}
          ></td>
          <td
            onClick={() => handleClick(2, 2)}
            className={`table ${player[2][2]}`}
          ></td>
        </tr>
      </table>
      <h2 className={winnerName === '' ? 'hidden' : ''}>
        {' '}
        {`Ha ganado 
        ${winnerName === 'even'
            ? player1 || 'Jugador 1'
            : player2 || 'Jugador 2'
          }`}
      </h2>
    </main>
  );
};

export default TicTacToe;
