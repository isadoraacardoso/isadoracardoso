import "./App.scss";

function Sobre() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Sobre Mim 🎯</h2>
        </div>
        <div className="section">
          <p>
            Olá! :) <br />
            <br />
            Sou Isadora Cardoso, desenvolvedora de software e estudante de
            Sistemas de Informação na PUC Minas, atualmente no 5º período.
            Desenvolvo soluções digitais focadas na experiência do usuário,
            utilizando tecnologias como TypeScript, React e Next.js. <br />{" "}
            <br />
            Tenho experiência prática no desenvolvimento de aplicações web,
            desde a criação de interfaces até a conexão com banco de dados.
            Participei de projetos acadêmicos e pessoais, com foco no
            desenvolvimento de funcionalidades voltadas para a experiência do
            usuário.
            <br />
            <br />
            Atuo também como monitora nas disciplinas de Desenvolvimento Web,
            Git e Projetos, ajudando colegas a superarem desafios técnicos e
            fortalecendo ainda mais meu próprio aprendizado.
            <br />
            <br />
            Atualmente estou desenvolvendo projetos pessoais com propósito de
            crescer como profissional na área de tecnologia.
          </p>
        </div>
        <div>
          <button className="btn-inferior">
            <a
              href="public/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Currículo
            </a>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
