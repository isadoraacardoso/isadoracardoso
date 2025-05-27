import { useState, useEffect } from "react";
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
    name: "Tailwind CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
  },
];

function Habilidades() {
  return (
    <main>
      <section>
        <div className="title-projects">
          <h2>
            Habilidades <span className="emoji"> 🔥</span>
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
