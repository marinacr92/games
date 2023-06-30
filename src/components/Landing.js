import { Link } from 'react-router-dom';
import Footer from './Footer';
import ImgMemory from '../images/fotolandingmempng.png';
import ImgTicTacToe from '../images/landingtictac.png';
import BallPaper from '../images/kisspng-newspaper-newsprint-ball-papel-5ac79e07dd5244.1078719615230315599065.png';
import Logo from '../images/logo.png';
import LogoTitle from '../images/playtopiapng.svg';
import '../styles/Landing.scss';

const Landing = () => {
  return (
    <>
      <main className="main__landing">
        <section className="main__title">
          <img className="main__title--logo" src={Logo} alt="logo pato" />
          <img className="main__title--title" src={LogoTitle} alt="" />
        </section>
        <nav className="main__nav">
          <ul className="wall">
            <li className="wall__postit wall__postit--violet">
              <Link
                className="link"
                to="/tictactoe"
                title="Enlace al juego TicTacToe"
              >
                <p className="link__title">Tic Tac Toe</p>
                <img className="link__img" src={ImgTicTacToe} alt="" />
              </Link>
            </li>
            <li className="wall__postit wall__postit--green">
              <Link
                className="link"
                to="/memory"
                title="Enlace al juego Memory"
              >
                <img className="link__img" src={ImgMemory} alt="" />
                <p className="link__title">Memory</p>
              </Link>
            </li>
            <li className="wall__postit wall__postit--yellow">
              <Link className="link" to="#">
                <p className="link__title">Próximamente</p>
              </Link>
            </li>
            <li className="wall__postit wall__postit--orange">
              <Link className="link" to="#">
                <p className="link__title">Próximamente</p>
              </Link>
            </li>

            <li className="wall__postit wall__postit--blue">
              <Link className="link" to="#">
                <p className="link__title">Próximamente</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='main__decoration'>
          <img className='main__decoration--img' src={BallPaper} alt="" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
