import '../../styles/Memory.scss';
import ModalMemory from './ModalMemory';
import MemoryCards from './MemoryCards';
import SpiderDuck from '../../images/SuperHeros/spiderduck1.png';
import BatDuck from '../../images/SuperHeros/batman1.png';
import SuperDuck from '../../images/SuperHeros/superduck.png';
import JokerDuck from '../../images/SuperHeros/JokerDuck.png';
import KungFuDuck from '../../images/kungfuDuck.png';
import FlashDuck from '../../images/SuperHeros/flashduck.png';
import HulkDuck from '../../images/SuperHeros/hulkduck.png';
import CaptainDuck from '../../images/SuperHeros/captainduck.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Memory = () => {
  const [images, setImages] = useState([
    SpiderDuck,
    BatDuck,
    SuperDuck,
    JokerDuck,
    KungFuDuck,
    FlashDuck,
    HulkDuck,
    CaptainDuck,
    SpiderDuck,
    BatDuck,
    SuperDuck,
    JokerDuck,
    KungFuDuck,
    FlashDuck,
    HulkDuck,
    CaptainDuck,
  ]);

  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsMatched, setCardsMatched] = useState([]);

  const [counter, setCounter] = useState(0);

  const shuffle = () => {
    images.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...images]);
  };

  useEffect(() => {
    shuffle();
  }, []);

  const increment = () => {
    setCounter(counter + 1);
  };

  const flipCards = (cardId) => {
    increment();
    if (
      cardsFlipped.length < 2 &&
      !cardsFlipped.includes(cardId) &&
      !cardsMatched.includes(cardId)
    ) {
      const newCardsFlipped = [...cardsFlipped, cardId];
      setCardsFlipped(newCardsFlipped);

      if (newCardsFlipped.length === 2) {
        const card1 = newCardsFlipped[0];
        const card2 = newCardsFlipped[1];
        console.log('card1', card1, 'card2', card2);

        if (images[card1] === images[card2]) {
          setCardsMatched([...cardsMatched, card1, card2]);
          setCardsFlipped([]);
        } else {
          setTimeout(() => {
            setCardsFlipped([]);
          }, 1000);
        }
      }
    }
  };

  const winner = () => {
    if (cardsMatched.length === 16) {
      return '¡Has ganado!';
    }
  };

  const handleReset = () => {
    setCardsMatched([]);
    setCardsFlipped([]);
    shuffle();
    setCounter(0);
  };

  return (
    <>
      <main className="main main__memory">
        <ModalMemory />
        <h1 className="memory__title">Memory</h1>
        <div className="memory__board">
          <MemoryCards
            images={images}
            cardsMatched={cardsMatched}
            cardsFlipped={cardsFlipped}
            flipCards={flipCards}
          />
        </div>
        <section className="memory__footer">
          <section className="buttons">
            <Link to="/" className="button__return">
              Sala de juegos
            </Link>
            <button className="button__reset" onClick={handleReset}>
              Reiniciar partida
            </button>
          </section>
          <h3 className="message">
            Parejas acertadas: {Math.floor(cardsMatched.length / 2)}/8
          </h3>
        </section>
        {/* <p>{Math.floor(counter / 2)} movimientos</p>
      <h3>{winner()}</h3> */}
      </main>
      <section className="modal__memory--last"></section>
    </>
  );
};

export default Memory;
