/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import '../../styles/TicTacToe.scss';
import { Link } from 'react-router-dom';
import Bic from '../../images/bic.png';
import StartModalTicTacToe from './StartModalTicTacToe'
import FinishModalTictactoe from './FinishModalTicTacToe';


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

  // const theme = () =>{
  //   if(theme === 'ninja'){
  //     setTheme1('tort1')
  //     setTheme2('tort2')
  //   }
  // }

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

  const handleReset = () => {
    setWinnerName('');
    setCount(0);
    setBoard(Array(9).fill(''));
    setPlayer1('');
    setPlayer2('');
    return 'hidden'
  }

  const updatePlayer1 = (value) => {
    setPlayer1(value);
  };
  const updatePlayer2 = (value) => {
    setPlayer2(value);
  };

  return (
    <>
      <StartModalTicTacToe
        updatePlayer1={updatePlayer1}
        updatePlayer2={updatePlayer2}
        player1={player1}
        player2={player2}
        handleReset={handleReset}
        winnerName={winnerName}
      ></StartModalTicTacToe>
      <FinishModalTictactoe
        player1={player1}
        player2={player2}
        handleReset={handleReset}
        winnerName={winnerName} ></FinishModalTictactoe>
      <main className='main 
    main__tictactoe'>
        <h1 className='tictactoe__title'>TicTacToe</h1>
        <section className="tictactoe__box">
          <div className='tictactoe__board' onClick={winnerName === '' ? (ev) => whoPlays(ev.target.id) : () => { }}>
            {renderSquare}
          </div>
          <img className='tictactoe__bic' src={Bic} alt="boli bic" />
          <div>
          </div>
        </section>
        <section className='buttons'>
          <button className='buttons__return backBtn'>
            <Link className='buttons__link' to='/' >Volver</Link>
          </button>
          <button
            onClick={handleReset}
            className='buttons__reset'
          >Jugar de nuevo</button>
        </section>
      </main >

    </>
  );
};

export default TicTacToe;
