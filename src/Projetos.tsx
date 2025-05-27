import ListaProjetos from "@/components/ListaProjetos";
import "./App.scss";

function Projetos() {
  return (
    <main>
      <div>
        <div>
          <h2 className="title-projects">
            Meus projetos <span className="emoji"> 🚀</span>
            <br />
          </h2>
        </div>
        <ListaProjetos />
      </div>
    </main>
  );
}

export default Projetos;
