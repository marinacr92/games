const Form = ({ updatePlayer1, updatePlayer2, player1, player2
}) => {

  const handlePlayer = (ev) => {
    ev.preventDefault();
    if (ev.target.id === 'player1') {
      console.log(ev.target.value)
      updatePlayer1(ev.target.value)
    } else {
      updatePlayer2(ev.target.value)
    }
  }

  return (
    <form
      onChange={handlePlayer}
    >
      <label htmlFor="player1"> Jugador 1:
        <input type="text" name="player1" id="player1"
          value={player1}
        />
      </label>
      <label htmlFor="player2"> Jugador 2:
        <input type="text" name="player2" id="player2"
          value={player2}
        />
      </label>
    </form >
  )
}

export default Form;