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
  ]); //modificar array para que aparezcan por parejas

  const [foundPair, setFoundPair] = useState([]);

  // crear array vacío e ir guardando el nombre de las parejas encontradas, cuando ese array llegue a 8 elementos (index 7) significa que has ganado

  // classImg, empieza con una clase que es un background, al hacer click se ve el patito, cuando haces click en 2 se compara, si son iguales se pone la clase hidden y desaparecen, si son distintos vuelve la clase background y se da la vuelta la carta

  const [click1, setClick1] = useState('');
  const [click2, setClick2] = useState('');
  // const [classImg, setClassImg] = useState('');

  const shuffle = () => {
    images.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...images]);
  };

  useEffect(
    () => {
      if (click1 === click2 && click1 !== '') {
        setFoundPair([...foundPair, click1])
        console.log('3');
      }
      if (click1 !== '' && click2 !== '') {
        setClick1('');
        setClick2('');
      }
    }, [click1, click2]
  )

  const saveImg = (card) => {
    if (click1 === '') {
      setClick1(card);
      console.log('1');
    } else if (click2 === '') {
      setClick2(card);
      console.log(2);
    }
  };

  const winner = () => {
    if (foundPair.length === 8) {
      return 'Has ganado'
    }
  }

  return (
    <>
      <div className="board">
        <MemoryCards
          images={images}
          saveImg={saveImg}
          foundPair={foundPair}
        />
      </div>
      <button onClick={shuffle}>Reordena!</button>
      <h3>{winner()}</h3>
    </>
  );
};

export default Memory;
