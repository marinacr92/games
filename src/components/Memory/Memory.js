import '../../styles/Memory.scss';
import MemoryCards from './MemoryCards';
import StartModalMemory from './StartModalMemory';
import FinishModalMemory from './FinishModalMemory';
// import Monica from '../../images/Friends/MonicaDuck.png';
// import Joey from '../../images/Friends/JoeyDuck.png';
// import Phoebe from '../../images/Friends/PhoebeDuck.png';
// import Ross from '../../images/Friends/RossDuck.png';
// import Rachel from '../../images/Friends/RachelDuck.png';
// import Chandler from '../../images/Friends/ChandlerDuck.png';
import Aragorn from '../../images/LOTR/Aragorn.png';
import Arwen from '../../images/LOTR/Arwen.png';
import Frodo from '../../images/LOTR/Frodo.png';
import Galadriel from '../../images/LOTR/Galadriel.png';
import Gandalf from '../../images/LOTR/GandalfNot.png';
import Gimli from '../../images/LOTR/Gimli.png';
import Gollum from '../../images/LOTR/Gollum.png';
import Legolas from '../../images/LOTR/Legolas.png';
import Lurtz from '../../images/LOTR/lurtz.png';
import Samwise from '../../images/LOTR/Samwise.png';
import Saruman from '../../images/LOTR/Saruman.png';
import Sauron from '../../images/LOTR/Sauron.png';
import AquaDuck from '../../images/DC/Aquaduck.png';
import BatDuck from '../../images/DC/Batduck.png';
import BloodSportDuck from '../../images/DC/BloodSportDuck.png';
import CatDuck from '../../images/DC/Catduck.png';
import HarleyDuck from '../../images/DC/Harleyduck.png';
import JokerDuck from '../../images/DC/JokerDuck.png';
import PeacemakerDuck from '../../images/DC/PeacemakerDuck.png';
import RobinDuck from '../../images/DC/RobinDuck.png';
import SuperDuck from '../../images/DC/Superduck.png';
import TDKDuck from '../../images/DC/TDKDuck.png';
import TwoFaceDuck from '../../images/DC/TwoFaceDuck.png';
import WonderDuck from '../../images/DC/Wonderduck.png';
import JanineDuck from '../../images/Ghostbusters/JanineDuck.png';
import SlimerDuck from '../../images/Ghostbusters/SlimerDuck.png';
import SpenglerDuck from '../../images/Ghostbusters/SpenglerDuck.png';
import StantzDuck from '../../images/Ghostbusters/StantzDuck.png';
import StayPuftDuck from '../../images/Ghostbusters/StayPuftDuck.png';
import VenkmanDuck from '../../images/Ghostbusters/VenkmanDuck.png';
import VenkmanDuckSlime from '../../images/Ghostbusters/VenkmanDuckSlime.png';
import WinstonDuck from '../../images/Ghostbusters/WinstonDuck.png';
import ChuckyDuck from '../../images/Horror/ChuckyDuck.png';
import DraculaDuck from '../../images/Horror/DraculaDuck.png';
import ExorcistDuck from '../../images/Horror/ExorcistDuck.png';
import GremlinDuck from '../../images/Horror/GremlinDuck.png';
import MummyDuck from '../../images/Horror/MummyDuck.png';
import NunDuck from '../../images/Horror/NunDuck.png';
import PennywiseDuck from '../../images/Horror/PennywiseDuck.png';
import TexasDuck from '../../images/Horror/TexasDuck.png';
import BlankaDuck from '../../images/StreetFighter/BlankaDuck.png';
import ChunLiDuck from '../../images/StreetFighter/ChunLiDuck.png';
import EHondaDuck from '../../images/StreetFighter/EHondaDuck.png';
import GuileDuck from '../../images/StreetFighter/GuileDuck.png';
import RyuDuck from '../../images/StreetFighter/RyuDuck.png';
import Zangief from '../../images/StreetFighter/ZangiefDuck.png';

// import {
//   Monica,
//   Joey,
//   Phoebe,
//   Ross,
//   Rachel,
//   Chandler,
// } from '../Resources/Friends';
import { Friends, Joey } from '../Resources/Friends';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Memory = () => {
  const [images, setImages] = useState([]);
  const [showStartModal, setShowStartModal] = useState(true);
  const [showFinishModal, setShowFinishModal] = useState(false);

  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsMatched, setCardsMatched] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');

  const [counter, setCounter] = useState(0);
  const friends = [...Friends];
  const street = [
    BlankaDuck,
    ChunLiDuck,
    EHondaDuck,
    GuileDuck,
    RyuDuck,
    Zangief,
  ];
  const lotr = [
    Aragorn,
    Arwen,
    Frodo,
    Galadriel,
    Gandalf,
    Gimli,
    Gollum,
    Legolas,
    Lurtz,
    Samwise,
    Saruman,
    Sauron,
  ];

  const dc = [
    AquaDuck,
    BatDuck,
    BloodSportDuck,
    CatDuck,
    HarleyDuck,
    JokerDuck,
    PeacemakerDuck,
    RobinDuck,
    SuperDuck,
    TDKDuck,
    TwoFaceDuck,
    WonderDuck,
  ];

  const ghostbuster = [
    JanineDuck,
    SlimerDuck,
    SpenglerDuck,
    StantzDuck,
    StayPuftDuck,
    VenkmanDuck,
    VenkmanDuckSlime,
    WinstonDuck,
  ];
  const horror = [
    ChuckyDuck,
    DraculaDuck,
    ExorcistDuck,
    GremlinDuck,
    MummyDuck,
    NunDuck,
    PennywiseDuck,
    TexasDuck,
  ];
  const [theme, setTheme] = useState('');
  const [themeOne, setThemeOne] = useState(friends);
  const [themeTwo, setThemeTwo] = useState(street);
  const [imgOne, setImgOne] = useState(Joey);
  const [imgTwo, setImgTwo] = useState(RyuDuck);
  const [isExplodingMem, setIsExplodingMem] = useState(false);

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

  useEffect(() => {
    if (theme.length !== 0) {
      if (cardsMatched.length === theme.length) {
        setShowFinishModal(true);
        setIsExplodingMem(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsMatched]);

  const handleRestartGame = () => {
    setCardsMatched([]);
    setCardsFlipped([]);
    setCounter(0);
    setShowStartModal(false);
    setShowFinishModal(false);
    setIsExplodingMem(false);
    setTimeout(() => {
      theme.sort(() => {
        return Math.random() - 0.5;
      });
      setImages([...theme]);
    }, 700);
  };

  const handleChangeTheme = () => {
    setCardsMatched([]);
    setCardsFlipped([]);
    setImages([]);
    setTheme('');
    setCounter(0);
    setShowStartModal(true);
    setShowFinishModal(false);
    setIsExplodingMem(false);
  };

  const selectDifficulty = (id) => {
    if (id === 'easy') {
      setDifficulty('easy');
      setThemeOne(friends);
      setImgOne(Joey);
      setThemeTwo(street);
      setImgTwo(RyuDuck);
    } else if (id === 'medium') {
      setDifficulty('medium');
      setThemeOne(horror);
      setImgOne(DraculaDuck);
      setThemeTwo(ghostbuster);
      setImgTwo(StayPuftDuck);
    } else if (id === 'hard') {
      setDifficulty('hard');
      setThemeOne(lotr);
      setImgOne(Frodo);
      setThemeTwo(dc);
      setImgTwo(AquaDuck);
    }
  };

  const themeOption1 = () => {
    if (difficulty === 'easy') {
      return 'Friends';
    } else if (difficulty === 'medium') {
      return 'Terror';
    } else if (difficulty === 'hard') {
      return 'El señor de los anillos';
    }
  };

  const themeOption2 = () => {
    if (difficulty === 'easy') {
      return 'Street Fighter';
    } else if (difficulty === 'medium') {
      return 'Cazafantasmas';
    } else if (difficulty === 'hard') {
      return 'DC Comics';
    }
  };

  const selectTheme = (id) => {
    if (id === '1') {
      const copy = themeOne.concat(themeOne);
      setTheme(copy);
    } else {
      const copy = themeTwo.concat(themeTwo);
      setTheme(copy);
    }
  };

  const letsPlay = () => {
    theme.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...theme]);
    setShowStartModal(false);
  };

  const closeModalMem = () => {
    setShowFinishModal(false);
  };

  return (
    <>
      <main className="main main__memory">
        <StartModalMemory
          selectDifficulty={selectDifficulty}
          difficulty={difficulty}
          selectTheme={selectTheme}
          themeOption1={themeOption1}
          themeOption2={themeOption2}
          letsPlay={letsPlay}
          showStartModal={showStartModal}
          imgOne={imgOne}
          imgTwo={imgTwo}
          theme={theme}
        />
        <h1 className="memory__title">Memory</h1>
        <div className="memory__board">
          <MemoryCards
            images={images}
            cardsMatched={cardsMatched}
            cardsFlipped={cardsFlipped}
            flipCards={flipCards}
            difficulty={difficulty}
          />
        </div>
        <section
          className={
            showStartModal || showFinishModal ? 'hidden' : 'memory__footer'
          }
        >
          <section className="section__buttons">
            <Link to="/" className="button__container">
              <Button
                classIcon="fa-arrow-left"
                textButton="Sala de juegos"
              ></Button>
            </Link>
            <button className="button__container" onClick={handleRestartGame}>
              <Button
                classIcon="fa-arrow-rotate-right"
                textButton="Reiniciar Partida"
              ></Button>
            </button>
            <button onClick={handleChangeTheme} className="button__container">
              <Button
                classIcon="fa-sliders"
                textButton="Cambiar personajes"
              ></Button>
            </button>
          </section>
          <h3 className={showStartModal ? 'hidden' : 'couples-matched-msg'}>
            Parejas acertadas:{' '}
            {`${Math.floor(cardsMatched.length / 2)} / ${Math.floor(
              theme.length / 2
            )}`}
          </h3>
        </section>
        <FinishModalMemory
          counter={counter}
          showFinishModal={showFinishModal}
          handleRestartGame={handleRestartGame}
          handleChangeTheme={handleChangeTheme}
          showStartModal={showStartModal}
          closeModalMem={closeModalMem}
          isExplodingMem={isExplodingMem}
        />
      </main>
      {/* <section className="modal__memory--last"></section> */}
    </>
  );
};

export default Memory;
