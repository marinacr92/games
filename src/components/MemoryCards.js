const MemoryCards = ({ images, flipCards, cardsFlipped, cardsMatched }) => {
  const eachCard = images.map((card, index) => {
    return (
      <div
        key={index}
        onClick={
          !cardsMatched.includes(index) && !cardsFlipped.includes(index)
            ? () => flipCards(index)
            : () => {}
        }
        className={`card 
         ${cardsFlipped.includes(index) ? 'flipped' : ''} ${
          cardsMatched.includes(index) ? 'flipped' : ''
        }
        `}
      >
        <figure className="card__front card__face">
          <img
            src="https://st3.depositphotos.com/4431055/16834/i/450/depositphotos_168348748-stock-photo-yellow-rubber-ducks-water-background.jpg"
            alt="Cara A"
            className="card__face--img"
          />
        </figure>
        <figure className="card__back card__face">
          <img id={card} src={card} alt="Cara B" className="card__face--img" />
        </figure>
      </div>
    );
  });

  return <>{eachCard}</>;
};

export default MemoryCards;
