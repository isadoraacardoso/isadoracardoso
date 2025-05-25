import React, { useState } from "react";
import "./App.scss";

function Sobre() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Sobre Mim 🎯</h2>
        </div>
        <div className="section">
          <p>
            Sou Isadora Cardoso, estudante de Sistemas de Informação na PUC
            Minas, apaixonada por desenvolvimento front-end. <br /> <br />
            Desenvolvo soluções digitais focadas na experiência do usuário,
            utilizando tecnologias como React, TypeScript e Prisma. Já
            participei de projetos acadêmicos e extensionistas, incluindo o
            desenvolvimento de sistemas colaborativos e aplicações web. Também
            atuei como monitora de disciplinas de desenvolvimento web frontend e
            de git, ajudando outros alunos a aprimorarem suas habilidades.{" "}
            <br />
            <br />
            Atualmente estou desenvolvendo projetos pessoais para criar soluções
            práticas para o mundo digital.
          </p>
        </div>
        <div>
          <button className="btn-inferior">Currículo</button>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
