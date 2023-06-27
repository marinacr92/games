import { Link } from 'react-router-dom';
import ImgMemory from '../images/fotolandingmempng.png';
import ImgTicTacToe from '../images/landingtictac.png';
import BallPaper from '../images/kisspng-newspaper-newsprint-ball-papel-5ac79e07dd5244.1078719615230315599065.png';
import Logo from '../images/logo.png';
import LogoTitle from '../images/playtopiapng.svg';
import '../styles/Landing.scss';

const Landing = () => {
  return (
    <main className="main main__landing">
      <section className="main__title">
        <img className="main__title--logo" src={Logo} alt="logo pato" />
        <img className="main__title--title" src={LogoTitle} alt="" />
      </section>
      <nav className="main__nav">
        <ul className="wall">
          <li className="wall__postit wall__postit--violet">
            <Link className="link" to="/tictactoe">
              <p className="link__title">Tic Tac Toe</p>
              <img className="link__img" src={ImgTicTacToe} alt="" />
            </Link>
          </li>
          <li className="wall__postit wall__postit--green">
            <Link className="link" to="/memory">
              <img className="link__img" src={ImgMemory} alt="" />
              <p className="link__title">Memory</p>
            </Link>
          </li>
          <li className="wall__postit wall__postit--yellow">
            <Link className="link" to="/tictactoe">
              Próximamente
            </Link>
          </li>
          <li className="wall__postit wall__postit--orange">
            <Link className="link" to="/tictactoe">
              Próximamente
            </Link>
          </li>

          <li className="wall__postit wall__postit--blue">
            <Link className="link" to="/tictactoe">
              Próximamente
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        <img width="100px" src={BallPaper} alt="" />
      </div> */}
    </main>
  );
};

export default Landing;
