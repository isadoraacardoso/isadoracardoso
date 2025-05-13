import { FaReact, FaWordpress, FaThLarge } from "react-icons/fa";
import styles from "@/styles/Categorias.module.scss";

// Tipagem para as categorias
type Categoria = {
  nome: string;
  icone: string;
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
    { nome: "Todos", icone: "🛍️" },
    {
      nome: "React",
      icone: "🎯",
    },
    { nome: "WordPress", icone: "🔥" },
  ];

  return (
    <div className={styles.categorias}>
      {categorias.map((cat) => (
        <button
          key={cat.nome}
          onClick={() => onSelecionar(cat.nome)}
          className={`${styles.categoria} ${
            categoriaAtual === cat.nome ? styles.ativa : ""
          }`}
        >
          <span className={styles.icone}>{cat.icone}</span>
        </button>
      ))}
    </div>
  );
}
