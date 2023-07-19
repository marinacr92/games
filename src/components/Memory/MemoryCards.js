// import FlipMove from 'react-flip-move';


const MemoryCards = ({
  images,
  flipCards,
  cardsFlipped,
  cardsMatched,
  difficulty,
}) => {
  const eachCard = images.map((card, index) => {
    return (
      <div
        key={index}
        onClick={
          !cardsMatched.includes(index) && !cardsFlipped.includes(index)
            ? () => flipCards(index)
            : () => { }
        }
        className={`card 
         ${cardsFlipped.includes(index) ? 'flipped' : ''} ${cardsMatched.includes(index) ? 'flipped' : ''
          } 
          ${difficulty === 'hard' ? 'card__size--hard' : 'card__size--nohard'}
        `}
      >
        {/* <figure className="card__front card__faces"> */}
        <img
          src="https://st3.depositphotos.com/4431055/16834/i/450/depositphotos_168348748-stock-photo-yellow-rubber-ducks-water-background.jpg"
          alt="Cara A"
          className="card__front card__faces"
        />
        {/* </figure> */}
        {/* <figure className="card__back card__faces"> */}
        <img id={card} src={card} alt="Cara B" className="card__back card__faces" />
        {/* </figure> */}
      </div>
    );
  });

  return <>
    {eachCard}
  </>
};

export default MemoryCards;
