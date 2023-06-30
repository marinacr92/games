import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import FinalModal from '../FinalModal';
import MemoryCards from './MemoryCards';
import StartModalMemory from './StartModalMemory';

import '../../styles/Memory.scss';





import { Friends, Joey } from '../Resources/Friends';
import { Street, RyuDuck } from '../Resources/Street';
import { LOTR, Frodo } from '../Resources/LOTR';
import { DC, AquaDuck } from '../Resources/DC';
import { Ghostbuster, StayPuftDuck } from '../Resources/Ghostbusters';
import { Horror, DraculaDuck } from '../Resources/Horror'



const Memory = () => {
  const [images, setImages] = useState([]);
  const [showStartModal, setShowStartModal] = useState(true);
  const [showFinishModal, setShowFinishModal] = useState(false);

  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsMatched, setCardsMatched] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');

  const [counter, setCounter] = useState(0);
  const friends = [...Friends];
  const street = [...Street];
  const lotr = [...LOTR];
  const dc = [...DC];
  const ghostbuster = [...Ghostbuster];
  const horror = [...Horror];

  const [themeOne, setThemeOne] = useState(friends);
  const [themeTwo, setThemeTwo] = useState(street);
  const [theme, setTheme] = useState(friends);
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
    if (images.length !== 0) {
      if (cardsMatched.length === images.length) {
        setTimeout(() => {
          setShowFinishModal(true);
          setIsExplodingMem(true);
        }, 700);
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
      const copy = theme.concat(theme);
      copy.sort(() => {
        return Math.random() - 0.5;
      });
      setImages([...copy]);
    }, 700);
  };

  const handleChangeTheme = () => {
    setCardsMatched([]);
    setCardsFlipped([]);
    setImages([]);
    setTheme(friends);
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
      setTheme(friends);
    } else if (id === 'medium') {
      setDifficulty('medium');
      setThemeOne(horror);
      setImgOne(DraculaDuck);
      setThemeTwo(ghostbuster);
      setImgTwo(StayPuftDuck);
      setTheme(horror);
    } else if (id === 'hard') {
      setDifficulty('hard');
      setThemeOne(lotr);
      setImgOne(Frodo);
      setThemeTwo(dc);
      setImgTwo(AquaDuck);
      setTheme(lotr);
    }
  };

  const themeOption1 = () => {
    if (difficulty === 'easy') {
      return 'Friends';
    } else if (difficulty === 'medium') {
      return 'Terror';
    } else if (difficulty === 'hard') {
      return 'ESDLA';
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
      // const copy = themeOne.concat(themeOne);
      // setTheme(copy);
      setTheme(themeOne);
    } else {
      // const copy = themeTwo.concat(themeTwo);
      // setTheme(copy);
      setTheme(themeTwo);
    }
  };

  const letsPlay = () => {
    const copy = theme.concat(theme);
    copy.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...copy]);
    setShowStartModal(false);
    setDifficulty('easy');
    setThemeOne(friends);
    setImgOne(Joey);
    setThemeTwo(street);
    setImgTwo(RyuDuck);
  };

  const closeModalMem = () => {
    setShowFinishModal(false);
  };

  return (
    <>
      <main
        className="main__memory"
      // style={{ height: viewportHeight }}
      >
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
          {/* <FlipMove> */}
          <MemoryCards
            images={images}
            cardsMatched={cardsMatched}
            cardsFlipped={cardsFlipped}
            flipCards={flipCards}
            difficulty={difficulty}
          />
          {/* </FlipMove> */}
        </div>
        <section
          className={
            showStartModal || showFinishModal ? 'hidden' : 'memory__footer'
          }
        >
          <section className="section__buttons">
            <Link
              to="/"
              className="button__container"
              title="Botón para volver a la sala de juegos"
            >
              <Button
                classIcon="fa-arrow-left"
                textButton="Sala de juegos"
              ></Button>
            </Link>
            <button
              className="button__container"
              onClick={handleRestartGame}
              title="Botón para reiniciar la partida"
            >
              <Button
                classIcon="fa-arrow-rotate-right"
                textButton="Reiniciar partida"
              ></Button>
            </button>
            <button
              onClick={handleChangeTheme}
              className="button__container"
              title="Botón para cambiar los personajes"
            >
              <Button
                classIcon="fa-sliders"
                textButton="Cambiar personajes"
              ></Button>
            </button>
          </section>
          <h3 className={showStartModal ? 'hidden' : 'couples-matched-msg'}>
            Parejas acertadas:{' '}
            {`${Math.floor(cardsMatched.length / 2)} / ${Math.floor(
              images.length / 2
            )}`}
          </h3>
        </section>
        <FinalModal
          isOpen={showFinishModal}
          isExploding={isExplodingMem}
          closeModal={closeModalMem}
          winner={`¡Has ganado en ${Math.floor(counter / 2)} movimientos!`}
          handleReset={handleRestartGame}
          handlePlayAgain={handleChangeTheme}
          game={'memory'}
        />
      </main>
    </>
  );
};

export default Memory;
