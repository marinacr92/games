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

  const [foundPair, setFoundPair] = useState([]);

  const [isSelected, setIsSelected] = useState([]);

  const [click1, setClick1] = useState('');
  const [click2, setClick2] = useState('');

  // const [isActived, setIsActived] = useState('');

  const [counter, setCounter] = useState(0);



  const shuffle = () => {
    images.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...images]);
  };

  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    shuffle, []
  )

  useEffect(
    () => {
      if (click1 === click2 && click1 !== '') {
        setFoundPair([...foundPair, click1])
      }
      if (click1 !== '' && click2 !== '') {
        setClick1('');
        setClick2('');
        // noSelected()
      }
    }, [click1, click2]
  )


  const increment = () => {
    setCounter(counter + 1)
  }
  // const noSelected = () => {
  //   setIsActived('')
  // }
  // const active = () => {
  //   setIsActived('selected')
  // }
  const saveImg = (card) => {
    if (click1 === '') {
      setClick1(card);
    } else if (click2 === '') {
      setClick2(card);
      increment()
    }
  };

  const selectCard = (index) => {
    setIsSelected([...isSelected, index])
    if (isSelected.length === 2) {
      setIsSelected([])
    }
  }

  const winner = () => {
    if (foundPair.length === 8) {
      return 'Has ganado'
    }
  }



  const handleReset = () => {
    setFoundPair([]);
    setClick1('');
    setClick2('');
    shuffle();
    setCounter(0);
  }

  return (
    <>
      <div className="board">
        <MemoryCards
          images={images}
          saveImg={saveImg}
          foundPair={foundPair}
          selectCard={selectCard}
          isSelected={isSelected}
        // active={active}
        // isActived={isActived}
        />
      </div>
      <button onClick={handleReset}> {counter === 0 ? 'Play!' : 'Reset'}</button>
      <p>{counter}</p>
      <h3>{winner()}</h3>
    </>
  );
};

export default Memory;
