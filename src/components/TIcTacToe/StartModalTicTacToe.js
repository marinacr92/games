/* eslint-disable default-case */

const StartModalTicTacToe = ({ updatePlayer1, updatePlayer2, player1, player2, handleReset, chooseTheme, theme }) => {

  const handlePlayer = (ev) => {
    if (ev.target.id === 'player1') {
      console.log(ev.target.value);
      updatePlayer1(ev.target.value);
    } else {
      updatePlayer2(ev.target.value);
    }
  };

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
    <div className='modal__tictactoe--background hidden'>
      <section className='modal__tictactoe--window' >
        <form onSubmit={(ev) => ev.preventDefault()} className='modal__tictactoe--form'>
          <fieldset className='tictactoe__players'>
            <legend className='tictactoe__legend'>Jugadores:</legend>
            <label className='tictactoe__label' htmlFor="player1">
              Jugador 1:
              <input
                type="text"
                name="player1"
                id="player1"
                value={player1}
                onChange={handlePlayer}
                placeholder='Marina'
              />
            </label>
            <label className='tictactoe__label' htmlFor="player2">
              Jugador 2:
              <input
                type="text"
                name="player2"
                id="player2"
                value={player2}
                onChange={handlePlayer}
                placeholder='Bea'
              />
            </label>
          </fieldset>
          <fieldset className='tictactoe__theme'>
            <legend className='tictactoe__legend'>Elige un tema:</legend>
            <label htmlFor="ninja" className='tictactoe__label'>
              <input type="radio" name="ninja" id="ninja" onChange={handleTheme} checked={theme === 'ninja'} /> Tortugas Ninja
            </label>
            <label htmlFor="power" className='tictactoe__label'>
              <input type="radio" name="power" id="power" onChange={handleTheme} checked={theme === 'power'} />
              Power Rangers
            </label>
            <label htmlFor="future" className='tictactoe__label'>
              <input type="radio" name="future" id="future" onChange={handleTheme} checked={theme === 'future'} /> Regreso al futuro
            </label>
          </fieldset>
        </form>
        <button
          onClick={handleReset}
          className='buttons__reset'
        >Jugar</button>
      </section>
    </div>
  )
};

export default StartModalTicTacToe;