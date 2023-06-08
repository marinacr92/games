/* eslint-disable default-case */
import { useState } from 'react';

const TicTacToe = () => {
  const [A1, setA1] = useState(false);
  const [A2, setA2] = useState(false);
  const [A3, setA3] = useState(false);
  const [B1, setB1] = useState(false);
  const [B2, setB2] = useState(false);
  const [B3, setB3] = useState(false);
  const [C1, setC1] = useState(false);
  const [C2, setC2] = useState(false);
  const [C3, setC3] = useState(false);

  const [count, setCount] = useState(0);

  const [infoA1, setInfoA1] = useState('');
  const [infoA2, setInfoA2] = useState('');
  const [infoA3, setInfoA3] = useState('');
  const [infoB1, setInfoB1] = useState(false);
  const [infoB2, setInfoB2] = useState(false);
  const [infoB3, setInfoB3] = useState(false);
  const [infoC1, setInfoC1] = useState(false);
  const [infoC2, setInfoC2] = useState(false);
  const [infoC3, setInfoC3] = useState(false);


  const counter = () => {
    setCount(count + 1)
  };

  const player = (setInfo) => {
    if (count % 2 === 0) {
      setInfo('even')
    } else {
      setInfo('odd');
    }
  }

  const handleClick = (ev) => {
    switch (ev.target.id) {
      case 'A1':
        counter();
        setA1(true);
        player(setInfoA1);
        break;
      case 'A2':
        setA2(true);
        counter();
        player(setInfoA2);
        break;
      case 'A3':
        setA3(true);
        counter();
        player(setInfoA3);
        break;
      case 'B1':
        setB1(true);
        counter();
        player(setInfoB1);
        break;
      case 'B2':
        setB2(true);
        counter();
        player(setInfoB2);
        break;
      case 'B3':
        setB3(true);
        counter();
        player(setInfoB3);
        break;
      case 'C1':
        setC1(true);
        counter();
        player(setInfoC1);
        break;
      case 'C2':
        setC2(true);
        counter();
        player(setInfoC2);
        break;
      case 'C3':
        setC3(true);
        counter();
        player(setInfoC3);
        break;
    }
  };
  const handleCLickNone = () => {

  }

  const classColor = (infoZ0) => {
    if (infoZ0 === "even") {
      return "blue"
    } else if (infoZ0 === "odd") {
      return "red"
    }
  }

  return (
    <>
      <table border="5" >
        <tr>
          <td onClick={A1 === false ? handleClick : handleCLickNone} id="A1" className={`table ${classColor(infoA1)}`}>
            A1
          </td>
          <td id="A2" className={`table ${classColor(infoA2)}`}
            onClick={A2 === false ? handleClick : handleCLickNone}
          >
            A2
          </td>
          <td id="A3" className={`table ${classColor(infoA3)}`}
            onClick={A3 === false ? handleClick : handleCLickNone}
          >
            A3
          </td>
        </tr>
        <tr>
          <td id="B1" onClick={B1 === false ? handleClick : handleCLickNone} className={`table ${classColor(infoB1)}`}>
            B1
          </td>
          <td id="B2" onClick={B2 === false ? handleClick : handleCLickNone} className={`table ${classColor(infoB2)}`}>
            B2
          </td>
          <td id="B3" onClick={B3 === false ? handleClick : handleCLickNone} className={`table ${classColor(infoB3)}`}>
            B3
          </td>
        </tr>
        <tr>
          <td id="C1" onClick={C1 === false ? handleClick : handleCLickNone} className={`table ${classColor(infoC1)}`}>
            C1
          </td>
          <td id="C2" onClick={C2 === false ? handleClick : handleCLickNone} className={`table ${classColor(infoC2)}`}>
            C2
          </td>
          <td id="C3" onClick={C3 === false ? handleClick : handleCLickNone} className={`table ${classColor(infoC3)}`}>
            C3
          </td>
        </tr>
      </table>
      <h2>{count}</h2>
    </>
  );
};

export default TicTacToe;
