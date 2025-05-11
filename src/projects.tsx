import CardProjetos from "../src/components/CardsProjetos";
import React, { useState } from "react";
import "./App.scss";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className="container">
        <div className="title">
          <h1>Meus Projetos</h1>
        </div>
        <CardProjetos />
      </div>
    </main>
  );
}

export default Projects;
