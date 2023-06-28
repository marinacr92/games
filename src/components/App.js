import '../styles/Reset.scss';
import '../styles/App.scss';
import '../styles/Button.scss';
import Landing from './Landing';
import TicTacToe from './TicTacToe/TicTacToe';
import Memory from './Memory/Memory';
import NotFound from './NotFound';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Obtén la altura real del viewport al cargar la página
    setViewportHeight(getViewportHeight());

    // Establece la altura real del viewport al cambiar el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el evento del controlador cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para obtener la altura real del viewport
  const getViewportHeight = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  // Controlador de evento para actualizar la altura del viewport
  const handleResize = () => {
    setViewportHeight(getViewportHeight());
  };

  return (
    <>
      <div className="div" style={{ height: viewportHeight }}>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/tictactoe/" element={<TicTacToe />} />
          <Route path="/memory/" element={<Memory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
