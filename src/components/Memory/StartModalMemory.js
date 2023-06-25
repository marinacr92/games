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
    selectTheme(ev.currentTarget.id);
  };

  const handlePlay = () => {
    letsPlay();
  };

  return (
    <section
      className={showStartModal ? 'modal__memory--background' : 'hidden'}
    >
      <section className="modal__memory--window">
        <form className="modal__memory--form">
          <fieldset className="modalmem__difficulty">
            <legend className="modalmem__difficulty--legend">
              Nivel de dificultad
            </legend>
            <div className="modalmem__difficulty--content">
              <input
                className="modalmem__difficulty--input"
                onChange={handleDifficulty}
                type="radio"
                name="difficulty"
                id="easy"
                checked={difficulty === 'easy'}
              />
              <label className="modalmem__difficulty--label">
                Fácil (6 parejas)
              </label>

              <input
                className="modalmem__difficulty--input"
                onChange={handleDifficulty}
                type="radio"
                name="difficulty"
                id="medium"
                checked={difficulty === 'medium'}
              />
              <label className="modalmem__difficulty--label">
                Medio (8 parejas)
              </label>

              <input
                className="modalmem__difficulty--input"
                onChange={handleDifficulty}
                type="radio"
                name="difficulty"
                id="hard"
                checked={difficulty === 'hard'}
              />
              <label className="modalmem__difficulty--label">
                Difícil (12 parejas)
              </label>
            </div>
          </fieldset>
          <fieldset className="modalmem__theme">
            <legend className="modalmem__theme--legend">Temática</legend>
            <div className="modalmem__theme--content">
              <button
                id="1"
                className={`memory__button ${
                  theme.includes(imgOne) ? 'marker' : ''
                }`}
                //className="memory__button"
                onClick={handleTheme}
              >
                <h3 className="modalmem__theme--label">{themeOption1()}</h3>
                <figure className="modalmem__theme--figure">
                  <img className="modalmem__theme--img" src={imgOne} alt="" />
                </figure>
              </button>
              <button
                id="2"
                className={`memory__button ${
                  theme.includes(imgTwo) ? 'marker' : ''
                }`}
                //className="memory__button"
                onClick={handleTheme}
              >
                <h3 className="modalmem__theme--label">{themeOption2()}</h3>
                <figure className="modalmem__theme--figure">
                  <img className="modalmem__theme--img" src={imgTwo} alt="" />
                </figure>
              </button>
            </div>
          </fieldset>
        </form>
        <button className="modal__button--play" onClick={handlePlay}>
          ¡A jugar!
        </button>
      </section>
    </section>
  );
};

export default StartModalMemory;
