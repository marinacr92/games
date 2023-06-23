const ModalMemory = () => {
  return (
    <section className="modal__memory--background">
      <section className="modal__memory--window">
        <form className="modal__memory--form">
          <fieldset className="memory__difficulty">
            <legend className="memory__difficulty--legend">
              Nivel de dificultad
            </legend>
            <label className="memory__difficulty--label">
              <input type="radio" name="difficulty" id="" checked />
              Fácil (6 parejas)
            </label>
            <label className="memory__difficulty--label">
              <input type="radio" name="difficulty" id="" />
              Medio (8 parejas)
            </label>
            <label className="memory__difficulty--label">
              <input type="radio" name="difficulty" id="" />
              Difícil (12 parejas)
            </label>
          </fieldset>
          <fieldset className="memory__theme">
            <legend className="memory__theme--legend">Temática</legend>
            <button className="memory__button memory__theme--option1">
              <h3>Nombre pareja 1</h3>
              <img src="" alt="" />
            </button>
            <button className="memory__button memory__theme--option2">
              <h3>Nombre pareja 2</h3>
              <img src="" alt="" />
            </button>
          </fieldset>
        </form>
        <button>¡A jugar!</button>
      </section>
    </section>
  );
};

export default ModalMemory;
