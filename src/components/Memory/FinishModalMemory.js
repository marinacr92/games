import Button from '../Button';
import { Link } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';
import '../../styles/Modal.scss'


const FinishModalMemory = ({
  counter,
  showFinishModal,
  handleRestartGame,
  handleChangeTheme,
  showStartModal,
  closeModalMem,
  isExplodingMem,
}) => {
  return (
    <section
      // por que la doble condicion con el && ??
      className={
        showFinishModal === true && showStartModal === false
          ? 'modal__background'
          : 'hidden'
      }
    >
      {isExplodingMem ? (
        <ConfettiExplosion
          particleCount={250}
          duration={5000}
          force={0}
          zIndex={99}
          height={'500vh'}
          colors={['#b1b1ff', '#90ee90', '#ffa07a', '#fbfb52', '#add8e6']}
        />
      ) : (
        ''
      )}
      <section className="modal__window modal__memory">
        <i
          className="fa-solid fa-xmark"
          onClick={() => closeModalMem()}
          title="Salir del menú"
        ></i>
        {/* <section className="modal__finishcontent"> */}
        <h2 className="finalContent__title">
          ¡Has ganado en {Math.floor(counter / 2)} movimientos!
        </h2>
        {/* <section className="modal__buttons"> */}
        <section className="modal__buttons">
          <button
            className="button__container"
            onClick={handleRestartGame}
            title="Botón para reiniciar la partida"
          >
            <Button
              classIcon="fa-arrow-rotate-right"
              textButton="Volver a jugar"
            ></Button>
          </button>
          <button
            onClick={handleChangeTheme}
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
            to="/"
            className="button__container"
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
  );
};

export default FinishModalMemory;
