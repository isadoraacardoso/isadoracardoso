import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./App.scss";

const habilidades = [
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
];

function Habilidades() {
  const [index, setIndex] = useState(0);

  const prevSkill = () => {
    setIndex((prev) => (prev === 0 ? habilidades.length - 1 : prev - 1));
  };

  const nextSkill = () => {
    setIndex((prev) => (prev === habilidades.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Habilidades</h2>
        </div>

        <div className="section">
          <div className="carousel">
            <div className="skill">
              <img
                src={habilidades[index].icon}
                alt={habilidades[index].name}
                height="50"
                width="50"
              />
              <p>{habilidades[index].name}</p>{" "}
              <img
                src={habilidades[index].icon}
                alt={habilidades[index].name}
                height="50"
                width="50"
              />
              <p>{habilidades[index].name}</p>
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

export default Habilidades;
