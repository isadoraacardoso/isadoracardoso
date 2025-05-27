import styles from "@/styles/CardsProjetos.module.scss";
import { useState } from "react";

type CardProps = {
  titulo: string;
  descricao: string;
  imagem: string;
  linkProjeto: string;
  linkGithub: string;
  tags?: string[];
};

export default function CardProjetos({
  titulo,
  descricao,
  imagem,
  linkProjeto,
  linkGithub,
  tags = [],
}: CardProps) {
  const [isOpen] = useState(false);

  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      {tags.length > 0 && <p className={styles.tags}>{tags.join(" • ")}</p>}

      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>
      <div className={styles.botoes}>
        <a href={linkProjeto} target="_blank" rel="noopener noreferrer">
          <button className={`{styles.botoes} ${isOpen ? "active" : ""}`}>
            <div className="btn-face-white">Ver</div>
            <div className="btn-face-purple">Ver</div>
          </button>
        </a>
        <a href={linkGithub} target="_blank" rel="noopener noreferrer">
          <button className={`{styles.botoes} ${isOpen ? "active" : ""}`}>
            <div className="btn-face-white">GitHub</div>
            <div className="btn-face-purple">GitHub</div>
          </button>
        </a>
      </div>
    </div>
  );
}
