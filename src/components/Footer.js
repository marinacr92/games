import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li>
            <span className="footer__name">Bea Figueroa</span>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bea-figueroa/" target="blank">
              <i className="fa-brands fa-linkedin footer__icon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/beafig" target="blank">
              <i className="fa-brands fa-github footer__icon"></i>
            </a>
          </li>
        </ul>
        <ul className="footer__ul">
          <li>
            <span className="footer__name">Marina Caro</span>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marina-caro-romero/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin footer__icon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/marinacr92" target="blank">
              <i className="fa-brands fa-github footer__icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
