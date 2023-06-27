import { Link } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion'

const FinishModalTictactoe = ({ player1, player2, handleReset, winnerName, character1, isFinishModalOpen, handlePlayAgain, isExploding, closeModal }) => {
  return (
    <>

      <div className={isFinishModalOpen ? 'modal__tictactoe--background' : 'hidden'}>

        {isExploding ? <ConfettiExplosion
          particleCount={250}
          duration={3000}
          zIndex={99}
          height={'500vh'}
        /> : ''}
        <section className='modal__tictactoe--window'>
          <i class="fa-solid fa-xmark" onClick={() => closeModal()}></i>
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
    </>
  )
}
export default FinishModalTictactoe;