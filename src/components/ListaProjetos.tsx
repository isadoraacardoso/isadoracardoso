import CardProjetos from "@/components/CardsProjetos";
import styles from "@/styles/listaProjetos.module.scss";

export default function ListaProjetos() {
  const projetos = [
    {
      titulo: "Catálogo de Acessórios",
      descricao: "Catálogo feito para uma loja de acessórios.",
      imagem: "/lnacessorios.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://lnacessorioscatalogo.vercel.app/",
      linkGithub: "https://github.com/isadoraacardoso/catalogo",
      tags: ["TypeScript", "React", "Next.js", "Prisma"],
    },
    {
      titulo: "Auxílio Alimentação",
      descricao:
        "Aplicação web desenvolvida para o RH da Prefeitura, automatizando o cálculo proporcional do auxílio-alimentação e agilizando relatórios mensais com base nos dias trabalhados pelos servidores.",
      imagem: "/auxalt.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://auxilio-alimentacao.vercel.app/auth",
      linkGithub: "https://github.com/isadoraacardoso/auxilio-alimentacao",
      tags: ["TypeScript", "React", "Tailwind CSS", "Vite", "Supabase"],
    },
    {
      titulo: "Curso de Automaquiagem",
      descricao: "Landing page para um curso de automaquiagem fictício.",
      imagem: "/make.png", // Lembre-se de colocar o caminho correto
      linkProjeto: "https://curso-de-maquiagem.vercel.app/",
      linkGithub: "https://github.com/isadoraacardoso/curso-de-maquiagem",
      tags: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    },
    {
      titulo: "Hospedagem de Pets",
      descricao:
        "Meu primeiro projeto colaborativo desenvolvido no contexto acadêmico, focado em criar uma plataforma para unir tutores de animais de estimação e pet sitters.",
      imagem: "/pet.png", // Lembre-se de colocar o caminho correto
      linkProjeto:
        "https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-1-e1-proj-web-t1-hospedagem-de-pets/src/",
      linkGithub:
        "https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t1-hospedagem-de-pets",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
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
