import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "./App.scss";

const projeto = [
  {
    name: "HTML",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    description: "Descrição do projeto 1 ",
    link: "https://youtube.com",
  },
  {
    name: "CSS",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    description: "Descrição do projeto 1 ",
    link: "https://youtube.com",
  },
  {
    name: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    description: "Descrição do projeto 1 ",
    link: "https://youtube.com",
  },
  {
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    description: "Descrição do projeto 1 ",
    link: "https://youtube.com",
  },
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    description: "Descrição do projeto 1",
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
            <div className="skill">
              <img
                src={projeto[index].image}
                alt={projeto[index].name}
                height="50"
                width="50"
              />
              <h3>{projeto[index].name}</h3>
              <p>{projeto[index].description}</p>
              <a
                href={projeto[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Ver Projeto <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="btn-inferior-seta">
          <button onClick={prevSkill}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSkill}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Projetos;
