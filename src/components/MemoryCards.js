const MemoryCards = ({
  images,
  //saveImg,
  //foundPair,
  //selectCard,
  //isSelected,
  flipCards,
  cardsFlipped,
  cardsMatched,
}) => {
  // const rotate = (card, index) => {
  //   saveImg(card);
  //   selectCard(index);
  //   // active()
  //   // ev.currentTarget.className += ' ' + 'selected'
  // };

  const eachCard = images.map((card, index) => {
    return (
      // <figure key={index} className="cards" >
      //   <img id={card} src={card} alt=""
      //     className={`card__img ${foundPair.includes(card) ? 'hidden' : ''}`}
      //     onClick={() => saveImg(card)} />
      // </figure>
      <div
        key={index}
        //id={index}
        onClick={() => flipCards(index)}
        className={`card 
         ${cardsFlipped.includes(index) ? 'flipped' : ''} ${
          cardsMatched.includes(index) ? 'flipped' : ''
        }
        `}
        // ${isActived ? 'selected' : ''}`}
      >
        <figure className="card__front card__face">
          <img
            src="https://st3.depositphotos.com/4431055/16834/i/450/depositphotos_168348748-stock-photo-yellow-rubber-ducks-water-background.jpg"
            alt="Cara A"
            className="card__face--img"
          />
        </figure>
        <figure className="card__back card__face">
          <img
            id={card}
            src={card}
            alt="Cara B"
            className="card__face--img"
            // onClick={() => saveImg(card)}
          />
        </figure>
      </div>
    );
  });

  return <>{eachCard}</>;
};

export default MemoryCards;
