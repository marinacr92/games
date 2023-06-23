const ModalMemory = ({
  selectDifficulty,
  difficulty,
  selectTheme,
  themeOption1,
  themeOption2,
  letsPlay,
  showModal,
}) => {
  const handleDifficulty = (ev) => {
    selectDifficulty(ev.target.id);
  };

  const handleTheme = (ev) => {
    selectTheme(ev.target.id);
  };

  return (
    <section className={showModal ? 'modal__memory--background' : 'hidden'}>
      <section className="modal__memory--window">
        <form className="modal__memory--form">
          <fieldset className="memory__difficulty">
            <legend className="memory__difficulty--legend">
              Nivel de dificultad
            </legend>
            <label className="memory__difficulty--label">
              <input
                onChange={handleDifficulty}
                type="radio"
                name="difficulty"
                id="easy"
                checked={difficulty === 'easy'}
              />
              Fácil (6 parejas)
            </label>
            <label className="memory__difficulty--label">
              <input
                onChange={handleDifficulty}
                type="radio"
                name="difficulty"
                id="medium"
                checked={difficulty === 'medium'}
              />
              Medio (8 parejas)
            </label>
            <label className="memory__difficulty--label">
              <input
                onChange={handleDifficulty}
                type="radio"
                name="difficulty"
                id="hard"
                checked={difficulty === 'hard'}
              />
              Difícil (12 parejas)
            </label>
          </fieldset>
          <fieldset className="memory__theme">
            <legend className="memory__theme--legend">Temática</legend>
            <button
              id="1"
              className="memory__button memory__theme--option1"
              onClick={handleTheme}
            >
              <h3>{themeOption1()}</h3>
              <img src="" alt="" />
            </button>
            <button
              id="2"
              className="memory__button memory__theme--option2"
              onClick={handleTheme}
            >
              <h3>{themeOption2()}</h3>
              <img src="" alt="" />
            </button>
          </fieldset>
        </form>
        <button onClick={letsPlay}>¡A jugar!</button>
      </section>
    </section>
  );
};

export default ModalMemory;
