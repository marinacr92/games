/* eslint-disable default-case */

import Button from '../Button';
import '../../styles/Modal.scss'
import { Link } from 'react-router-dom';

const StartModalTicTacToe = ({
  updatePlayer1,
  updatePlayer2,
  player1,
  player2,
  chooseTheme,
  theme,
  isStartModalOpen,
  handlePlay,
}) => {
  // función poner imagen  del tema
  const seeCharacter1 = () => {
    if (theme === 'ninja') {
      return 'donatello';
    } else if (theme === 'power') {
      return 'pink';
    } else if (theme === 'future') {
      return 'doc';
    }
  };
  const seeCharacter2 = () => {
    if (theme === 'ninja') {
      return 'michelangelo';
    } else if (theme === 'power') {
      return 'blue';
    } else if (theme === 'future') {
      return 'marty';
    }
  };

  // manejadora de los inputs para el nombre de los jugadores
  const handlePlayer = (ev) => {
    if (ev.target.id === 'player1') {
      updatePlayer1(ev.target.value);
    } else {
      updatePlayer2(ev.target.value);
    }
  };

  // manejadora de los radios para el tema con el que jugar
  const handleTheme = (ev) => {
    switch (ev.target.id) {
      case 'ninja':
        chooseTheme('ninja');
        break;
      case 'power':
        chooseTheme('power');
        break;
      case 'future':
        chooseTheme('future');
        break;
    }
  };

  return (
    <section
      className={isStartModalOpen ? 'modal__background' : 'hidden'}
    >
      <section className="modal__window modal__tictactoe">
        <form
          onSubmit={(ev) => ev.preventDefault()}
          className="modal__startContent"
        >
          <fieldset>
            <legend className="startContent__legend">Jugadores:</legend>
            <div className='startContent__content--players'>
              <label className="startContent__label--tictactoe" htmlFor="player1">
                Jugador 1:
                <input
                  className="startContent__input--tictactoe"
                  type="text"
                  name="player1"
                  id="player1"
                  value={player1}
                  onChange={handlePlayer}
                  placeholder="Marina"
                />
              </label>
              <label className="startContent__label--tictactoe" htmlFor="player2">
                Jugador 2:
                <input
                  className="startContent__input--tictactoe"
                  type="text"
                  name="player2"
                  id="player2"
                  value={player2}
                  onChange={handlePlayer}
                  placeholder="Bea"
                />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend className="startContent__legend">Elige un tema:</legend>
            <div className="startContent__content--radios">
              <label htmlFor="ninja" className="startContent__label">
                <input
                  type="radio"
                  name="ninja"
                  id="ninja"
                  onChange={handleTheme}
                  checked={theme === 'ninja'}
                />{' '}
                Tortugas Ninja
              </label>
              <label htmlFor="power" className="startContent__label">
                <input
                  type="radio"
                  name="power"
                  id="power"
                  onChange={handleTheme}
                  checked={theme === 'power'}
                /> {' '}
                Power Rangers
              </label>
              <label htmlFor="future" className="startContent__label">
                <input
                  type="radio"
                  name="future"
                  id="future"
                  onChange={handleTheme}
                  checked={theme === 'future'}
                />{' '}
                Regreso al futuro
              </label>
            </div>
          </fieldset>
        </form>
        <div className="startContent__characters">
          <div className={`startContent__characters--img ${seeCharacter1()}`}></div>
          <div className={`startContent__characters--img ${seeCharacter2()}`}></div>
        </div>
        <section className="modal__buttons">
          <Link
            to="/"
            className="button__container"
            title="Botón para volver a la sala de juegos"
          >
            <Button
              classIcon="fa-arrow-left"
              textButton="Sala de juegos"
            ></Button>
          </Link>
          <button
            onClick={handlePlay}
            className="button__container button__play"
            title="Comenzar a jugar"
          >
            <Button classIcon="fa-play" textButton="Jugar"></Button>
          </button>
        </section>
      </section>
    </section>
  );
};

export default StartModalTicTacToe;
