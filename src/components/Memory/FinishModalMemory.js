import Button from '../Button';
import { Link } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';

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
      className={
        showFinishModal === true && showStartModal === false
          ? 'modal__memory--background'
          : 'hidden'
      }
      // className="modal__memory--background"
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
      <section className="modal__memory--window">
        <i class="fa-solid fa-xmark" onClick={() => closeModalMem()}></i>
        <section className="modal__memory--finishcontent">
          <h2 className="modal__title">
            ¡Has ganado en {Math.floor(counter / 2)} movimientos!
          </h2>
          {/* <section className="modal__buttons"> */}
          <section className="modal__buttons">
            <div className="modal__buttons--buttons">
              <button className="button__container" onClick={handleRestartGame}>
                <Button
                  classIcon="fa-arrow-rotate-right"
                  textButton="Reiniciar Partida"
                ></Button>
              </button>
              <button onClick={handleChangeTheme} className="button__container">
                <Button
                  classIcon="fa-sliders"
                  textButton="Cambiar personajes"
                ></Button>
              </button>
            </div>
            <Link to="/" className="button__container">
              <Button
                classIcon="fa-arrow-left"
                textButton="Sala de juegos"
              ></Button>
            </Link>
          </section>
        </section>
      </section>
    </section>
    // </section>
  );
};

export default FinishModalMemory;
