import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/tictactoe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/memory">Memory</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Landing;
