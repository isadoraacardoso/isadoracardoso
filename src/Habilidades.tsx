import React, { useState } from 'react';
import './Habilidades.scss';

function Habilidades() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <header className='header-container'>
        <div className='logo-container'>
          <img src="./" alt="" />
          <div className='logo-text'>
            <span className='logo-text-bold'>Isadora</span>
            <span className='logo-text-bold'>Cardoso</span>
          </div>
        </div>

        <div className='menu-toggle' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <nav className={`menu-options ${isOpen ? 'active' : ''}`}>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Habilidades</a>
        </nav>

        <button className={`menu-options ${isOpen ? 'active' : ''}`}>
          <div className='btn-face-white'>
            Contato 
          </div>
          <div className='btn-face-purple'>
            Contato
          </div>
        </button>
      </header>

    </main>
  );
}

export default Habilidades;