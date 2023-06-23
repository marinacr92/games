import { Link } from 'react-router-dom';

const FinishModalTictactoe = ({ player1, player2, handleReset, winnerName, character1, isFinishModalOpen, handlePlayAgain }) => {
  return (
    <div className={isFinishModalOpen ? 'modal__tictactoe--background' : 'hidden'}>
      <section className='modal__tictactoe--window'>
        < h2>
          {
            `Ha ganado
          ${winnerName === character1
              ? player1 || 'Jugador 1'
              : player2 || 'Jugador 2'
            }`
          }
        </h2 >
        <button className='buttons__return backBtn'>
          <Link className='buttons__link' to='/' >Volver</Link>
        </button>
        <button
          onClick={handlePlayAgain}
          className='buttons__play'
        >Jugar de nuevo</button>
        <button
          onClick={handleReset}
          className='buttons__reset'
        >Cambiar personajes</button>
      </section>
    </div>
  )
}
export default FinishModalTictactoe;