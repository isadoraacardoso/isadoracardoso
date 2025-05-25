import CardProjetos from "@/components/CardsProjetos";
import styles from "@/styles/listaProjetos.module.scss";
import { useState } from "react";
import Categorias from "./Categorias";

export default function ListaProjetos() {
  const projetos = [
    {
      titulo: "Catálogo de Acessórios",
      descricao: "Catálogo feito para uma loja de acessórios.",
      imagem: "pubilc/Captura de tela 2025-03-28 111802.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://lnacessorioscatalogo.vercel.app/",
      linkGithub: "https://github.com/isadoraacardoso/catalogo",
      tags: ["TypeScript", "React", "Next.js", "Prisma"],
      categoria: ["All Code"],
    },

    // Adicione mais projetos aqui
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const projetosFiltrados =
    categoriaSelecionada === "Todos"
      ? projetos
      : projetos.filter((proj) =>
          categoriaSelecionada === "Todos"
            ? true
            : proj.categoria.includes(categoriaSelecionada)
        );

  return (
    // <>
    //<Categorias
    // onSelecionar={setCategoriaSelecionada}
    // categoriaAtual={categoriaSelecionada}
    // />

    <div className={styles.grid}>
      {projetosFiltrados.map((projeto, index) => (
        <div
          key={index}
          className={`${styles.cardWrapper} ${
            index % 2 === 0 ? styles.up : styles.down
          }`}
        >
          <CardProjetos {...projeto} />
        </div>
      ))}
    </div>
    // </>
  );
}
