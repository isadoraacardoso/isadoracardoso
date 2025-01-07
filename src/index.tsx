import React, { useState } from 'react';
import './App.scss';

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <main>

      <div className='content-container'>
        <h1>Olá,<br />Eu sou Isadora <br />Desenvolvedora Front End</h1>
        <div className='bubble target'>🎯</div>
        <div className='bubble shop'>🛍️</div>
        <div className='bubble rocket'>🔥</div>
        <div className='bubble fire'>🚀</div>
      </div>

    </main>



  );
}

export default Index;