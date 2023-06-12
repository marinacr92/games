/* eslint-disable default-case */
import { useEffect, useState } from 'react';
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

  const handleClick = (ev) => {
    counter();
    switch (ev.target.id) {
      case 'A1':
        whoPlays(0, 0);
        break;
      case 'A2':
        whoPlays(0, 1);
        break;
      case 'A3':
        whoPlays(0, 2);
        break;
      case 'B1':
        whoPlays(1, 0);
        break;
      case 'B2':
        whoPlays(1, 1);
        break;
      case 'B3':
        whoPlays(1, 2);
        break;
      case 'C1':
        whoPlays(2, 0);
        break;
      case 'C2':
        whoPlays(2, 1);
        break;
      case 'C3':
        whoPlays(2, 2);
        break;
    }
  };

  const handleCLickNone = () => { };

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
    setPlayer1(value)
  }
  const updatePlayer2 = (value) => {
    setPlayer2(value)
  }

  return (
    <>
      < Form
        updatePlayer1={updatePlayer1}
        updatePlayer2={updatePlayer2}
        player1={player1} player2={player2}
      />
      <table border="5">
        <tr>
          <td
            onClick={
              player[0][0] === '' ? handleClick : handleCLickNone
            }
            id="A1"
            className={`table ${player[0][0]}`}
          ></td>
          <td
            id="A2"
            className={`table ${player[0][1]}`}
            onClick={
              player[0][1] === '' ? handleClick : handleCLickNone
            }
          ></td>
          <td
            id="A3"
            className={`table ${player[0][2]}`}
            onClick={
              player[0][2] === '' ? handleClick : handleCLickNone
            }
          ></td>
        </tr>
        <tr>
          <td
            id="B1"
            onClick={
              player[1][0] === '' ? handleClick : handleCLickNone
            }
            className={`table ${player[1][0]}`}
          ></td>
          <td
            id="B2"
            onClick={
              player[1][1] === '' ? handleClick : handleCLickNone
            }
            className={`table ${player[1][1]}`}
          ></td>
          <td
            id="B3"
            onClick={
              player[1][2] === '' ? handleClick : handleCLickNone
            }
            className={`table ${player[1][2]}`}
          ></td>
        </tr>
        <tr>
          <td
            id="C1"
            onClick={
              player[2][0] === '' ? handleClick : handleCLickNone
            }
            className={`table ${player[2][0]}`}
          ></td>
          <td
            id="C2"
            onClick={
              player[2][1] === '' ? handleClick : handleCLickNone
            }
            className={`table ${player[2][1]}`}
          ></td>
          <td
            id="C3"
            onClick={
              player[2][2] === '' ? handleClick : handleCLickNone
            }
            className={`table ${player[2][2]}`}
          ></td>
        </tr>
      </table>
      <h2>{count}</h2>
      <h2 className={winnerName === '' ? 'hidden' : ''}> {`Ha ganado 
        ${winnerName === 'even'
          ? player1 : player2}`}
      </h2>
    </>
  );
};

export default TicTacToe;
