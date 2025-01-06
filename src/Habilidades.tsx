import React, { useState } from 'react';
import './App.scss';

function Habilidades() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <main>
      
      <section className='habilidades'>
      <h1>Habilidades</h1>
      <div className='logos'>
        <div className='hidden'>
          <img alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
        </div>

        <div className='hidden'>
          <img alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
        </div>

        <div className='hidden'>
          <img alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
        </div>

        <div className='hidden'>
          <img alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"/>
        </div>

        <div className='hidden'>
          <img alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
        </div>

        

      </div>
    </section>

    

    
    </main>
   
  );
}


export default Habilidades;