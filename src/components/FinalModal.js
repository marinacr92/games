import { Link } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';
import Button from './Button';
import '../styles/Modal.scss'

const FinalModal = ({ isOpen, isExploding, closeModal, winner, handlePlayAgain, handleReset, game }) => {
  return (
    <section
      className={
        isOpen ? 'modal__background' : 'hidden'
      }
    >
      {isExploding ? (
        <ConfettiExplosion
          particleCount={400}
          duration={4000}
          zIndex={99}
          width={10000}
          colors={['#b1b1ff', '#90ee90', '#ffa07a', '#fbfb52', '#add8e6']}
          force={0.8}
        />
      ) : (
        ''
      )}
      <section className={`modal__window modal__${game}`}>
        <i
          className="fa-solid fa-xmark"
          onClick={() => closeModal()}
          title="Salir del menú"
        ></i>
        <h2 className="finalContent__title">
          {winner}
        </h2>

        <section className="modal__buttons">
          <button
            onClick={handleReset}

            className="button__container"
            title="Botón para reiniciar la partida"
          >
            <Button
              classIcon="fa-arrow-rotate-right"
              textButton="Volver a jugar"
            ></Button>
          </button>
          <button
            onClick={handlePlayAgain}
            className="button__container"
            title="Botón para cambiar los personajes"
          >
            <Button
              classIcon="fa-sliders"
              textButton="Cambiar personajes"
            ></Button>
          </button>

        </section>
        <div className='modal__link'>
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
        </div>
      </section>
    </section>
  )
}
export default FinalModal;