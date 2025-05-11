import styles from "@/styles/CardsProjetos.module.scss";
import React, { useState } from "react";

type CardProps = {
  titulo: string;
  descricao: string;
  imagem: string;
  autor: string;
  linkProjeto: string;
  linkGithub: string;
  tags?: string[];
};

export default function CardProjetos({
  titulo,
  descricao,
  imagem,
  autor,
  linkProjeto,
  linkGithub,
  tags = [],
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      {tags.length > 0 && <p className={styles.tags}>{tags.join(" • ")}</p>}

      <h3 className={styles.titulo}>{titulo}</h3>
      <span className={styles.autor}>@{autor}</span>
      <p className={styles.descricao}>{descricao}</p>
      <div className={styles.botoes}>
        <a href={linkProjeto} target="_blank" rel="noopener noreferrer">
          <button className={`{styles.botoes} ${isOpen ? "active" : ""}`}>
            <div className="btn-face-white">Contato</div>
            <div className="btn-face-purple">Contato</div>
          </button>
        </a>
        <a href={linkGithub} target="_blank" rel="noopener noreferrer">
          <button className={`{styles.botoes} ${isOpen ? "active" : ""}`}>
            <div className="btn-face-white">Contato</div>
            <div className="btn-face-purple">Contato</div>
          </button>
        </a>
      </div>
    </div>
  );
}
