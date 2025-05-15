import { FaCode, FaWordpress, FaThLarge } from "react-icons/fa";
import styles from "@/styles/Categorias.module.scss";

// Tipagem para as categorias
type Categoria = {
  nome: string;
  icone: React.ReactNode;
};

type CategoriaProps = {
  onSelecionar: (categoria: string) => void;
  categoriaAtual: string;
};

export default function Categorias({
  onSelecionar,
  categoriaAtual,
}: CategoriaProps) {
  const categorias: Categoria[] = [
    {
      nome: "Todos",
      icone: <FaThLarge className={styles.iconeTodos} />,
    },
    {
      nome: "All Code",
      icone: <FaCode className={styles.iconeTodos} />,
    },
    { nome: "WordPress", icone: <FaWordpress className={styles.iconeTodos} /> },
  ];

  return (
    <div className={styles.categorias}>
      {categorias.map((cat) => (
        <div key={cat.nome} className={styles.itemCategoria}>
          <button
            onClick={() => onSelecionar(cat.nome)}
            className={`${styles.categoria} ${
              categoriaAtual === cat.nome ? styles.ativa : ""
            }`}
          >
            <span className={styles.icone}>{cat.icone}</span>
          </button>
          <span className={styles.nome}>{cat.nome}</span>
        </div>
      ))}
    </div>
  );
}
