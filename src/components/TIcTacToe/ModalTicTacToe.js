import Form from './Form';

const ModalTicTacToe = ({ updatePlayer1, updatePlayer2, player1, player2, handleReset, winnerName }) => {
  return (
    <div>
      <Form
        updatePlayer1={updatePlayer1}
        updatePlayer2={updatePlayer2}
        player1={player1}
        player2={player2}
      />
      <button
        onClick={() => handleReset}
        className='tictactoe__reset'
      >Jugar de nuevo</button>
      < h2 className={winnerName === '' ? 'hidden' : ''}>
        {
          `Ha ganado
          ${winnerName === 'spiderduck'
            ? player1 || 'Jugador 1'
            : player2 || 'Jugador 2'
          }`
        }
      </h2 >
    </div>
  )
};

export default ModalTicTacToe;