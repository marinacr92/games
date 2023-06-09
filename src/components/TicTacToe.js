/* eslint-disable default-case */
import { useEffect, useState } from 'react';

const TicTacToe = () => {
  const [count, setCount] = useState(0);

  const [selectedCell, setSelectedCell] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const [player, setPlayer] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [winnerName, setWinnerName] = useState('');

  const isSelected = (x, y) => {
    selectedCell[x][y] = true;
    setSelectedCell([...selectedCell]);
  };

  const counter = () => {
    setCount(count + 1);
  };

  const whoPlays = (x, y) => {
    if (count % 2 === 0) {
      player[x][y] = 'even';
    } else {
      player[x][y] = 'odd';
    }
    setPlayer([...player]);
  };

  const handleClick = (ev) => {
    switch (ev.target.id) {
      case 'A1':
        counter();
        isSelected(0, 0);
        whoPlays(0, 0);
        break;
      case 'A2':
        isSelected(0, 1);
        counter();
        whoPlays(0, 1);
        break;
      case 'A3':
        isSelected(0, 2);
        counter();
        whoPlays(0, 2);
        break;
      case 'B1':
        isSelected(1, 0);
        counter();
        whoPlays(1, 0);
        break;
      case 'B2':
        isSelected(1, 1);
        counter();
        whoPlays(1, 1);
        break;
      case 'B3':
        isSelected(1, 2);
        counter();
        whoPlays(1, 2);
        break;
      case 'C1':
        isSelected(2, 0);
        counter();
        whoPlays(2, 0);
        break;
      case 'C2':
        isSelected(2, 1);
        counter();
        whoPlays(2, 1);
        break;
      case 'C3':
        isSelected(2, 2);
        counter();
        whoPlays(2, 2);
        break;
    }
  };

  const handleCLickNone = () => {};

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

  return (
    <>
      <table border="5">
        <tr>
          <td
            onClick={
              selectedCell[0][0] === false ? handleClick : handleCLickNone
            }
            id="A1"
            className={`table ${player[0][0]}`}
          ></td>
          <td
            id="A2"
            className={`table ${player[0][1]}`}
            onClick={
              selectedCell[0][1] === false ? handleClick : handleCLickNone
            }
          ></td>
          <td
            id="A3"
            className={`table ${player[0][2]}`}
            onClick={
              selectedCell[0][2] === false ? handleClick : handleCLickNone
            }
          ></td>
        </tr>
        <tr>
          <td
            id="B1"
            onClick={
              selectedCell[1][0] === false ? handleClick : handleCLickNone
            }
            className={`table ${player[1][0]}`}
          ></td>
          <td
            id="B2"
            onClick={
              selectedCell[1][1] === false ? handleClick : handleCLickNone
            }
            className={`table ${player[1][1]}`}
          ></td>
          <td
            id="B3"
            onClick={
              selectedCell[1][2] === false ? handleClick : handleCLickNone
            }
            className={`table ${player[1][2]}`}
          ></td>
        </tr>
        <tr>
          <td
            id="C1"
            onClick={
              selectedCell[2][0] === false ? handleClick : handleCLickNone
            }
            className={`table ${player[2][0]}`}
          ></td>
          <td
            id="C2"
            onClick={
              selectedCell[2][1] === false ? handleClick : handleCLickNone
            }
            className={`table ${player[2][1]}`}
          ></td>
          <td
            id="C3"
            onClick={
              selectedCell[2][2] === false ? handleClick : handleCLickNone
            }
            className={`table ${player[2][2]}`}
          ></td>
        </tr>
      </table>
      <h2>{count}</h2>
      <h2 className={winnerName === '' ? 'hidden' : ''}>
        {winnerName === 'even'
          ? 'Ha ganado el Jugador 1'
          : 'Ha ganado el Jugador 2'}
      </h2>
    </>
  );
};

export default TicTacToe;
