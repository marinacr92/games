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

  //const [isSelected, setIsSelected] = useState([]);

  //const [click1, setClick1] = useState('');
  //const [click2, setClick2] = useState('');

  // const [isActived, setIsActived] = useState('');

  const [counter, setCounter] = useState(0);

  const shuffle = () => {
    images.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...images]);
  };

  // useEffect(
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   shuffle(),
  //   []
  // );

  const flipCards = (cardId) => {
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

  // useEffect(() => {
  //   if (click1 === click2 && click1 !== '') {
  //     setFoundPair([...foundPair, click1]);
  //   }
  //   if (click1 !== '' && click2 !== '') {
  //     setClick1('');
  //     setClick2('');
  //     // noSelected()
  //   }
  // }, [click1, click2]);

  // //const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const noSelected = () => {
  //   setIsActived('')
  // }
  // const active = () => {
  //   setIsActived('selected')
  // }
  // const saveImg = (card) => {
  //   if (click1 === '') {
  //     setClick1(card);
  //   } else if (click2 === '') {
  //     setClick2(card);
  //     increment();
  //   }
  // };

  // const selectCard = (index) => {
  //   setIsSelected([...isSelected, index]);
  //   if (isSelected.length === 2) {
  //     setIsSelected([]);
  //   }
  // };

  const winner = () => {
    if (cardsMatched.length === 8) {
      return 'Has ganado';
    }
  };

  const handleReset = () => {
    setCardsMatched([]);
    //setClick1('');
    //setClick2('');
    shuffle();
    setCounter(0);
  };

  return (
    <>
      <div className="board">
        <MemoryCards
          images={images}
          //saveImg={saveImg}
          cardsMatched={cardsMatched}
          cardsFlipped={cardsFlipped}
          flipCards={flipCards}
          //selectCard={selectCard}
          //isSelected={isSelected}
          // active={active}
          // isActived={isActived}
        />
      </div>
      <button onClick={handleReset}>
        {' '}
        {counter === 0 ? 'Play!' : 'Reset'}
      </button>
      <p>{counter}</p>
      <h3>{winner()}</h3>
    </>
  );
};

export default Memory;
