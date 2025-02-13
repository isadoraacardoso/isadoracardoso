import React, { useState } from 'react';
import './App.scss';




function Projetos() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <main>
         <section className='container'>
        <div className='title'>
          <h2>Projetos</h2>
        </div>
        <div className='section'>
          
        </div>
        <div className='btn-inferior'>
        <button>Currículo</button>
        </div>
      </section>

    </main>
   
  );
}


export default Projetos;