/* eslint-disable default-case */

import Button from '../Button';
import '../../styles/TicTacToe.scss';

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
    <div
      className={isStartModalOpen ? 'modal__tictactoe--background' : 'hidden'}
    >
      <section className="modal__tictactoe--window">
        <form
          onSubmit={(ev) => ev.preventDefault()}
          className="modal__tictactoe--form"
        >
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Jugadores:</legend>
            <label className="modal__label" htmlFor="player1">
              Jugador 1:
              <input
                className="modal__input"
                type="text"
                name="player1"
                id="player1"
                value={player1}
                onChange={handlePlayer}
                placeholder="Marina"
              />
            </label>
            <label className="modal__label" htmlFor="player2">
              Jugador 2:
              <input
                className="modal__input"
                type="text"
                name="player2"
                id="player2"
                value={player2}
                onChange={handlePlayer}
                placeholder="Bea"
              />
            </label>
          </fieldset>
          <fieldset className="modal__fielset">
            <legend className="modal__legend">Elige un tema:</legend>
            <label htmlFor="ninja" className="modal__label">
              <input
                type="radio"
                name="ninja"
                id="ninja"
                onChange={handleTheme}
                checked={theme === 'ninja'}
              />{' '}
              Tortugas Ninja
            </label>
            <label htmlFor="power" className="modal__label">
              <input
                type="radio"
                name="power"
                id="power"
                onChange={handleTheme}
                checked={theme === 'power'}
              />
              Power Rangers
            </label>
            <label htmlFor="future" className="modal__label">
              <input
                type="radio"
                name="future"
                id="future"
                onChange={handleTheme}
                checked={theme === 'future'}
              />{' '}
              Regreso al futuro
            </label>
          </fieldset>
        </form>
        <div className="modal__characters">
          <div className={`modal__img ${seeCharacter1()}`}></div>
          <div className={`modal__img ${seeCharacter2()}`}></div>
        </div>
        <div className="modal__button">
          <button
            onClick={handlePlay}
            className="button__container button__play"
            title="Comenzar a jugar"
          >
            <Button classIcon="fa-play" textButton="Jugar"></Button>
          </button>
        </div>
      </section>
    </div>
  );
};

export default StartModalTicTacToe;
