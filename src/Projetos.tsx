import ListaProjetos from "@/components/ListaProjetos";
import React, { useState } from "react";
import "./App.scss";

function Projetos() {
  const [index, setIndex] = useState(0);

  return (
    <main>
      <div>
        <div>
          <h2 className="title-projects">
            Meus projetos 🚀
            <br />
          </h2>
        </div>
        <ListaProjetos />
      </div>
    </main>
  );
}

export default Projetos;
