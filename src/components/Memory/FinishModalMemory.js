import { Link } from 'react-router-dom';

const FinishModalMemory = ({
  counter,
  showFinishModal,
  handleReset,
  showStartModal,
}) => {
  return (
    <section
      className={
        showFinishModal === true && showStartModal === false
          ? 'modal__memory--background'
          : 'hidden'
      }
    >
      <section className="modal__memory--window">
        <section className="modal__memory--content">
          <h2 className="modal__title">
            ¡Has ganado en {Math.floor(counter / 2)} movimientos!
          </h2>
          <section className="modal__buttons">
            <button className="button__container" onClick={handleReset}>
              <div className="button__front">
                <i className="fa-solid fa-arrow-rotate-right button__i"></i>
              </div>
              <div className="button__back">
                <span>Reiniciar partida</span>
              </div>
            </button>
            <Link to="/" className="button__container modal__button">
              <div className="button__front">
                <i className="fa-solid fa-arrow-left button__i"></i>
              </div>
              <div className="button__back">
                <span>Sala de juegos</span>
              </div>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default FinishModalMemory;
