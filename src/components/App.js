import '../styles/Reset.scss';
import '../styles/App.scss';
import Landing from './Landing';
import TicTacToe from './TicTacToe';
import Memory from './Memory';
import NotFound from './NotFound';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tictactoe/" element={<TicTacToe />} />
        <Route path="/memory/" element={<Memory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
