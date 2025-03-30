import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "./App.scss";

const projeto = [
  {
    name: "HTML",
    image: "pubilc/Captura de tela 2025-03-29 102657.png",
    description:
      "Uma plataforma digital web3 para tokenizar ações/ações de empresas. Esses ativos podem ser fungíveis ou não fungíveis  ",
    link: "https://youtube.com",
  },
  {
    name: "CSS",
    image: "pubilc/Captura de tela 2025-03-29 104710.png",
    description:
      "Uma plataforma digital web3 para tokenizar ações/ações de empresas. Esses ativos podem ser fungíveis ou não fungíveis   ",
    link: "https://youtube.com",
  },
  {
    name: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    description:
      "Uma plataforma digital web3 para tokenizar ações/ações de empresas. Esses ativos podem ser fungíveis ou não fungíveis  ",
    link: "https://youtube.com",
  },
  {
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    description:
      "Uma plataforma digital web3 para tokenizar ações/ações de empresas. Esses ativos podem ser fungíveis ou não fungíveis  ",
    link: "https://youtube.com",
  },
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    description:
      "Uma plataforma digital web3 para tokenizar ações/ações de empresas. Esses ativos podem ser fungíveis ou não fungíveis  ",
    link: "https://youtube.com",
  },
];

function Projetos() {
  const [index, setIndex] = useState(0);

  const prevSkill = () => {
    setIndex((prev) => (prev === 0 ? projeto.length - 1 : prev - 1));
  };

  const nextSkill = () => {
    setIndex((prev) => (prev === projeto.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Projetos</h2>
        </div>

        <div className="section">
          <div className="carousel">
            <span onClick={prevSkill} className="btn-carousel">
              <ChevronLeft size={40}></ChevronLeft>
            </span>

            <div className="projetos">
              <img src={projeto[index].image} alt={projeto[index].name} />
              <h3>{projeto[index].name}</h3>
              <p>{projeto[index].description}</p>
            </div>

            <span onClick={nextSkill} className="btn-carousel">
              <ChevronRight size={40}></ChevronRight>
            </span>
          </div>
        </div>

        <div className="btn-inferior">
          <button>
            <a
              href={projeto[index].link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Ver Projeto <ExternalLink size={16} />
            </a>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Projetos;
