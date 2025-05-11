import ListaProjetos from "@/components/ListaProjetos";
import React, { useState } from "react";

function Projetos() {
  const [index, setIndex] = useState(0);

  return (
    <main>
      <div>
        <div className="title">
          <h1>Meus Projetos</h1>
        </div>
        <ListaProjetos />
      </div>
    </main>
  );
}

export default Projetos;
