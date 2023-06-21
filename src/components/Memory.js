import '../styles/Memory.scss';
import MemoryCards from './MemoryCards';
import SpiderDuck from '../images/spiderduck1.png';
import BatDuck from '../images/batman1.png';
import SuperDuck from '../images/superduck.png';
import JokerDuck from '../images/JokerDuck.png';
import KungFuDuck from '../images/kungfuDuck.png';
import FlashDuck from '../images/flashduck.png';
import HulkDuck from '../images/hulkduck.png';
import CaptainDuck from '../images/captainduck.png';
import { useEffect, useState } from 'react';

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
    <main className='main'>
      <div className="board">
        <MemoryCards
          images={images}
          cardsMatched={cardsMatched}
          cardsFlipped={cardsFlipped}
          flipCards={flipCards}
        />
      </div>
      <button onClick={handleReset}>
        {' '}
        {counter === 0 ? 'Play!' : 'Reset'}
      </button>
      <p>{Math.floor(counter / 2)} movimientos</p>
      <p>Parejas acertadas: {Math.floor(cardsMatched.length / 2)}/8</p>
      <h3>{winner()}</h3>
    </main>
  );
};

export default Memory;
