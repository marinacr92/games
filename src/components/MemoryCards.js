const MemoryCards = ({ images, saveImg, classImg }) => {
  const eachCard = images.map((card, index) => {
    return (
      <figure key={index} className="cards" onClick={() => saveImg(card)}>
        <img id={card} src={card} alt="" className={`card__img ${classImg}`} />
      </figure>
    );
  });

  return <>{eachCard}</>;
};

export default MemoryCards;
