import './App.scss'

function App() {
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

          <nav className='menu-options'>
            <a href="">Sobre</a>
            <a href="">Projetos</a>
            <a href="">Habilidades</a>
          </nav>
          <button>
            <div className='btn-face-white'>
              Contato 
            </div>
            <div className='btn-face-purple'>
              Contato
            </div>
          </button>
      </header>

      <div className='content-container'>
        <h1>Olá,<br />Eu sou Isadora <br />Desenvolvedora Front End</h1>
        <div className='bubble target'>
        🎯
        </div>
        <div className='bubble shop'>
        🛍️
        </div>
        <div className='bubble rocket'>
        🔥
        </div>
        <div className='bubble fire'>
        🚀
        </div>
      </div>

    </main>
  )
}

export default App