/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import '../../styles/TicTacToe.scss';
import { Link } from 'react-router-dom';
import Bic from '../../images/bic.png';
import StartModalTicTacToe from './StartModalTicTacToe';
import FinishModalTictactoe from './FinishModalTicTacToe';
import Button from '../Button';

const TicTacToe = () => {
  // casillas del tablero
  const [board, setBoard] = useState(Array(9).fill(''));

  // guardar el index de las casillas jugadas
  const [playedSquares, setPlayedSquares] = useState([]);

  // contador para saber quien juega
  const [count, setCount] = useState(0);

  // nombres de los jugadores
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  // nombre del personaje ganador
  const [winnerName, setWinnerName] = useState('');

  // temática elegida
  const [theme, setTheme] = useState('ninja');

  // personajes de cada temática
  const [character1, setCharacter1] = useState('');
  const [character2, setCharacter2] = useState('');

  //abrir y/o cerrar ventanas modales
  const [isStartModalOpen, setIsStartModalOpen] = useState(true);
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);

  // confeti
  const [isExploding, setIsExploding] = useState(false);
  // comprueba las jugadas para ver quien gana, guarda el ganador en una variable y abre ventana modal
  useEffect(() => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinnerName(board[a]);
        setTimeout(() => {
          setIsFinishModalOpen(true);
          setIsExploding(true);
        }, 700);
      }
    }
  }, [board]);

  // pintar el tablero
  const renderSquare = board.map((square, index) => {
    return (
      <div
        key={index}
        id={index}
        className={`board__square board__square--${index} ${square}`}
      ></div>
    );
  });

  // contador
  const counter = () => {
    setCount(count + 1);
  };

  // manejadora del tablero, si hay un ganador o esa casilla ya ha sido pulsada no se puede cliclar
  const handleBoard = (ev) => {
    if (winnerName === '' && !playedSquares.includes(ev.target.id))
      whoPlays(ev.target.id);
  };

  // pinta el personaje en cada casilla y guarda el index de las casillas jugadas
  const whoPlays = (index) => {
    setPlayedSquares([...playedSquares, index]);
    counter();
    if (count % 2 === 0) {
      board[index] = character1;
    } else {
      board[index] = character2;
    }
    setBoard([...board]);
  };

  // elegir temática con la que jugar
  const chooseTheme = (id) => {
    setTheme(id);
  };

  // pintar los personajes según las temática elegida
  const renderCharacters = () => {
    switch (theme) {
      case 'ninja':
        setCharacter1('donatello');
        setCharacter2('michelangelo');
        break;
      case 'power':
        setCharacter1('pink');
        setCharacter2('blue');
        break;
      case 'future':
        setCharacter1('doc');
        setCharacter2('marty');
    }
  };

  // guardar nombres de los jugadores
  const updatePlayer1 = (value) => {
    setPlayer1(value);
  };
  const updatePlayer2 = (value) => {
    setPlayer2(value);
  };

  // botón volver a seleccionar personajes
  const handleReset = () => {
    setIsStartModalOpen(true);
    setIsFinishModalOpen(false);
  };

  // botón jugar de nuevo con los mismo personajes
  const handlePlayAgain = () => {
    setWinnerName('');
    setCount(0);
    setBoard(Array(9).fill(''));
    setPlayedSquares([]);
    setIsFinishModalOpen(false);
    setIsExploding(false);
  };

  // botón de inicio del juego en la modal
  const handlePlay = () => {
    renderCharacters();
    setWinnerName('');
    setCount(0);
    setBoard(Array(9).fill(''));
    setPlayedSquares([]);
    setTheme('ninja');
    setIsStartModalOpen(false);
    setIsExploding(false);
  };

  const closeModal = () => {
    setIsFinishModalOpen(false);
  };

  return (
    <>
      <main
        className="main 
    main__tictactoe"
        // style={{ height: viewportHeight }}
      >
        <StartModalTicTacToe
          updatePlayer1={updatePlayer1}
          updatePlayer2={updatePlayer2}
          player1={player1}
          player2={player2}
          handlePlay={handlePlay}
          chooseTheme={chooseTheme}
          winnerName={winnerName}
          theme={theme}
          isStartModalOpen={isStartModalOpen}
        />
        <h1 className="tictactoe__title">TicTacToe</h1>
        <section className="tictactoe__box">
          <div
            className="tictactoe__board"
            // onClick={winnerName === '' ? (ev) => whoPlays(ev.target.id) : () => { }}
            onClick={handleBoard}
          >
            {renderSquare}
          </div>
          <div className="tictactoe__players">
            <p className="tictactoe__players--names">
              {player1 || 'Jugador 1'} vs. {player2 || 'Jugador 2'}
            </p>
            <div className="tictactoe__players--characters">
              <div
                className={`tictactoe__players--one 
             ${character1}
              `}
              ></div>
              <div className={`tictactoe__players--two ${character2}`}></div>
            </div>
            <img className="tictactoe__bic" src={Bic} alt="boli bic" />
          </div>
        </section>
        <section className="section__buttons">
          <Link
            className="button__container"
            to="/"
            title="Botón para volver a la sala de juegos"
          >
            <Button
              classIcon="fa-arrow-left"
              textButton="Sala de juegos"
            ></Button>
          </Link>
          <button
            onClick={handlePlayAgain}
            className="button__container"
            title="Botón para reiniciar la partida"
          >
            <Button
              classIcon="fa-arrow-rotate-right"
              textButton="Reiniciar partida"
            ></Button>
          </button>
          <button
            onClick={handleReset}
            className="button__container"
            title="Botón para cambiar los personajes"
          >
            <Button
              classIcon="fa-sliders"
              textButton="Cambiar personajes"
            ></Button>
          </button>
        </section>
        <FinishModalTictactoe
          player1={player1}
          player2={player2}
          handleReset={handleReset}
          winnerName={winnerName}
          character1={character1}
          isFinishModalOpen={isFinishModalOpen}
          handlePlayAgain={handlePlayAgain}
          isExploding={isExploding}
          closeModal={closeModal}
        ></FinishModalTictactoe>
      </main>
    </>
  );
};

export default TicTacToe;
