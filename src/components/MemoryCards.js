const MemoryCards = ({ images, saveImg, foundPair }) => {

  const handleClick = (ev) => {
    saveImg(ev.target.id)
  }


  const eachCard = images.map((card, index) => {
    return (
      <figure key={index} className="cards" >
        <img id={card} src={card} alt=""
          className={`card__img ${foundPair.includes(card) ? 'hidden' : ''}`}
          onClick={handleClick} />
      </figure>
    );
  });

  return <>{eachCard}</>;
};

export default MemoryCards;
