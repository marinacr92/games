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
import { useState } from 'react';

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

  const [click1, setClick1] = useState('');
  const [click2, setClick2] = useState('');
  const [classImg, setClassImg] = useState('');

  const shuffle = () => {
    images.sort(() => {
      return Math.random() - 0.5;
    });
    console.log(images);
    setImages([...images]);
  };

  const compareImg = () => {
    if (click1 === click2 && click1 !== '') {
      //setClick1('');
      //setClick2('');
      setClassImg('hidden');
      console.log('3');
    } else {
      //setClick1('');
      //setClick2('');
      setClassImg('');
      console.log('4');
    }
  };

  const saveImg = (card) => {
    if (click1 === '') {
      setClick1(card);
      console.log('1');
    } else if (click2 === '') {
      setClick2(card);
      console.log(2);
    } else if (click1 !== '' && click2 !== '') {
      compareImg();
    }
  };

  return (
    <>
      <div className="board">
        <MemoryCards
          images={images}
          saveImg={saveImg}
          compareImg={compareImg}
          classImg={classImg}
        />
      </div>
      <button onClick={shuffle}>Reordena!</button>
    </>
  );
};

export default Memory;
