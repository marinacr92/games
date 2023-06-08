import { useState } from 'react';

const TicTacToe = () => {
  const [A1, setA1] = useState(false);
  const [A2, setA2] = useState(false);
  const [A3, setA3] = useState(false);
  // const [B1, setB1] = useState(false);
  // const [B2, setB2] = useState(false);
  // const [B3, setB3] = useState(false);
  // const [C1, setC1] = useState(false);
  // const [C2, setC2] = useState(false);
  // const [C3, setC3] = useState(false);

  const handleClick = (ev) => {
    switch (ev.target.id) {
      case 'A1':
        setA1(!A1);
        break;
      case 'A2':
        setA2(!A2);
        break;
      case 'A3':
        setA3(!A3);
        break;
    }
  };

  return (
    <table border="5" onClick={handleClick}>
      <tr>
        <td id="A1" className={`table ${A1 === true ? 'red' : ''}`}>
          A1
        </td>
        <td id="A2" className={`table ${A2 === true ? 'red' : ''}`}>
          A2
        </td>
        <td id="A3" className={`table ${A3 === true ? 'red' : ''}`}>
          A3
        </td>
      </tr>
      <tr>
        <td id="B1" className="table">
          B2
        </td>
        <td id="B2" className="table">
          B1
        </td>
        <td id="B3" className="table">
          B3
        </td>
      </tr>
      <tr>
        <td id="C1" className="table">
          C1
        </td>
        <td id="C2" className="table">
          C2
        </td>
        <td id="C3" className="table">
          C3
        </td>
      </tr>
    </table>
  );
};

export default TicTacToe;
