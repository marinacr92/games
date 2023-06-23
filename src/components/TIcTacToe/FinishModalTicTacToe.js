const FinishModalTictactoe = ({ player1, player2, handleReset, winnerName, character1 }) => {
  return (
    <div className='modal__tictactoe--background hidden'>
      <section className='modal__tictactoe--window'>
        < h2 className={winnerName === '' ? 'hidden' : ''}>
          {
            `Ha ganado
          ${winnerName === character1
              ? player1 || 'Jugador 1'
              : player2 || 'Jugador 2'
            }`
          }
        </h2 >
        <button
          onClick={() => handleReset}
          className='tictactoe__reset'
        >Jugar de nuevo</button>
      </section>
    </div>
  )
}
export default FinishModalTictactoe;