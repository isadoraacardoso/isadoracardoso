import { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Index from "./index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <main>
        <header className="header-container">
          <div className="logo-container">
            <img src="./" alt="" />
            <div className="logo-text">
              <Link to="/">
                <a className="logo-text-bold">
                  Isadora <br />
                  Cardoso
                </a>
              </Link>
            </div>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <nav className={`menu-options ${isOpen ? "active" : ""}`}>
            <a>
              <Link to="/sobre">Sobre</Link>
            </a>
            <a>
              <Link to="/projetos">Projetos</Link>
            </a>
            <a>
              <Link to="/habilidades">Habilidades</Link>
            </a>
          </nav>

          <Link to="/contato">
            <button className={`menu-options ${isOpen ? "active" : ""}`}>
              <div className="btn-face-white">Contato</div>
              <div className="btn-face-purple">Contato</div>
            </button>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <p>&copy; 2025 Portfólio. Todos os direitos reservados. </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
