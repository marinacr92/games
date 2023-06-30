import { Link } from 'react-router-dom';
import Button from '../Button';
import '../../styles/Modal.scss'

const StartModalMemory = ({
  selectDifficulty,
  difficulty,
  selectTheme,
  themeOption1,
  themeOption2,
  imgOne,
  imgTwo,
  letsPlay,
  showStartModal,
  theme,
}) => {
  const handleDifficulty = (ev) => {
    selectDifficulty(ev.target.id);
  };

  const handleTheme = (ev) => {
    ev.preventDefault();
    selectTheme(ev.currentTarget.id);
  };

  const handlePlay = () => {
    letsPlay();
  };

  return (
    <section
      className={showStartModal ? 'modal__background' : 'hidden'}
    >
      <section className="modal__window modal__memory">
        <form className="modal__startContent">
          <fieldset>
            <legend className="startContent__legend">
              Nivel de dificultad
            </legend>
            <div className="startContent__content--radios">
              <label className="startContent__label" htmlFor="easy">
                <input
                  className="startContent__input--memory"
                  onChange={handleDifficulty}
                  type="radio"
                  name="difficulty"
                  id="easy"
                  checked={difficulty === 'easy'}
                />

                Fácil (6 parejas)
              </label>
              <label className="startContent__label" htmlFor="medium">
                <input
                  className="startContent__input--memory"
                  onChange={handleDifficulty}
                  type="radio"
                  name="difficulty"
                  id="medium"
                  checked={difficulty === 'medium'}
                />

                Medio (8 parejas)
              </label>
              <label className="startContent__label" htmlFor="hard">
                <input
                  className="startContent__input--memory"
                  onChange={handleDifficulty}
                  type="radio"
                  name="difficulty"
                  id="hard"
                  checked={difficulty === 'hard'}
                />

                Difícil (12 parejas)
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend className="startContent__legend">Temática</legend>
            <div className="startContent__content--theme">
              <button
                id="1"
                className={`startContent__button ${theme.includes(imgOne) ? 'marker' : ''
                  }`}
                onClick={handleTheme}
              >
                <img className="startContent__button--img" src={imgOne} alt="" />
                <h3 className="startContent__label">{themeOption1()}</h3>
              </button>
              <button
                id="2"
                className={`startContent__button ${theme.includes(imgTwo) ? 'marker' : ''
                  }`}
                onClick={handleTheme}
              >
                <img className="startContent__button--img" src={imgTwo} alt="" />
                <h3 className="startContent__label">{themeOption2()}</h3>
              </button>
            </div>
          </fieldset>
        </form>
        <section className="modal__buttons">
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
          <button
            className="button__container button__play"
            onClick={handlePlay}
            title="Comenzar a jugar"
          >
            <Button classIcon="fa-play" textButton="¡A jugar!" />
          </button>
        </section>
      </section>
    </section >
  );
};

export default StartModalMemory;
