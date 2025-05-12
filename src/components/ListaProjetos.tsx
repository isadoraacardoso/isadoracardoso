import CardProjetos from "@/components/CardsProjetos";
import styles from "@/styles/listaProjetos.module.scss";

export default function ListaProjetos() {
  const projetos = [
    {
      titulo: "Portfólio Pessoal",
      descricao: "Projeto feito com Next.js e TSX.",
      imagem: "pubilc/Captura de tela 2025-03-28 111802.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://isadoraacardoso.github.io/portifolio",
      linkGithub: "https://github.com/isadoraacardoso/portifolio",
      tags: ["Next.js", "Supabase", "TypeScript"],
    },
    {
      titulo: "Catálogo de Acessórios",
      descricao: "Catálogo com integração ao banco de dados.",
      imagem: "pubilc/Captura de tela 2025-03-28 111802.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://isadoraacardoso.github.io/portifolio",
      linkGithub: "https://github.com/isadoraacardoso/portifolio",
      tags: ["Next.js", "Supabase", "TypeScript"],
    },
    {
      titulo: "Portfólio Pessoal",
      descricao: "Projeto feito com Next.js e TSX.",
      imagem: "pubilc/Captura de tela 2025-03-28 111802.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://isadoraacardoso.github.io/portifolio",
      linkGithub: "https://github.com/isadoraacardoso/portifolio",
      tags: ["Next.js", "Supabase", "TypeScript"],
    },
    {
      titulo: "Portfólio Pessoal",
      descricao: "Projeto feito com Next.js e TSX.",
      imagem: "pubilc/Captura de tela 2025-03-28 111802.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://isadoraacardoso.github.io/portifolio",
      linkGithub: "https://github.com/isadoraacardoso/portifolio",
      tags: ["Next.js", "Supabase", "TypeScript"],
    },
    {
      titulo: "Portfólio Pessoal",
      descricao: "Projeto feito com Next.js e TSX.",
      imagem: "pubilc/Captura de tela 2025-03-28 111802.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://isadoraacardoso.github.io/portifolio",
      linkGithub: "https://github.com/isadoraacardoso/portifolio",
      tags: ["Next.js", "Supabase", "TypeScript"],
    },
    // Adicione mais projetos aqui
  ];

  return (
    <div className={styles.grid}>
      {projetos.map((projeto, index) => (
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
  );
}
