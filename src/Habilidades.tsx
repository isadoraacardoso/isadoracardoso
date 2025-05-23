import React, { useState, useEffect } from "react";
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
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
];

function Habilidades() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(5);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % habilidades.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - 1 + habilidades.length) % habilidades.length
    );
  };

  return (
    <main>
      <section>
        <div className="title-projects">
          <h2>
            Habilidades <span className="emoji">🔥</span>
          </h2>
        </div>
        <div className="skills-grid">
          {habilidades.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Habilidades;
