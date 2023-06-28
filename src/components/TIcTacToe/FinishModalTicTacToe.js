import { Link } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';
import Button from '../Button';

const FinishModalTictactoe = ({
  player1,
  player2,
  handleReset,
  winnerName,
  character1,
  isFinishModalOpen,
  handlePlayAgain,
  isExploding,
  closeModal,
}) => {
  return (
    <>
      <div
        className={
          isFinishModalOpen ? 'modal__tictactoe--background' : 'hidden'
        }
      >
        {isExploding ? (
          <ConfettiExplosion
            particleCount={250}
            duration={5000}
            zIndex={99}
            height={'500vh'}
            colors={['#b1b1ff', '#90ee90', '#ffa07a', '#fbfb52', '#add8e6']}
            force={0}
          />
        ) : (
          ''
        )}
        <section className="modal__tictactoe--window">
          <i
            class="fa-solid fa-xmark"
            onClick={() => closeModal()}
            title="Salir del menú"
          ></i>
          <h2 className="modal__winner">
            {`Ha ganado
          ${
            winnerName === character1
              ? player1 || 'Jugador 1'
              : player2 || 'Jugador 2'
          }`}
          </h2>

          <div className="modal__btns">
            <button
              onClick={handlePlayAgain}
              className="button__container"
              title="Botón para reiniciar la partida"
            >
              <Button
                classIcon="fa-arrow-rotate-right"
                textButton="Volver a jugar"
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
          </div>
          <Link
            className="button__container modal__link"
            to="/"
            title="Botón para volver a la sala de juegos"
          >
            <Button
              classIcon="fa-arrow-left"
              textButton="Sala de juegos"
            ></Button>
          </Link>
        </section>
      </div>
    </>
  );
};
export default FinishModalTictactoe;
