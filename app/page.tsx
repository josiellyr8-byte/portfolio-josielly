import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="capa">
        <Image
          src="/capa.jpg.jpg"
          alt="Capa"
          fill
          className="capa-img"
          priority
        />
      </div>

      <div className="perfil-container">
        <Image
          src="/perfil.jpg"
          alt="Josielly Rayssa"
          width={170}
          height={170}
          className="perfil-img"
        />
      </div>

      <main className="home">
        <h1 className="nome">Josielly Rayssa</h1>

        <p className="subtitulo">
          Estudante de Sistemas para Internet • Recife, PE
        </p>

        <p className="descricao">
          Em transição para a área de tecnologia, com foco em desenvolvimento
          web. Possuo experiência em atendimento consultivo, análise de
          requisitos e resolução de problemas, unindo visão de negócio e
          tecnologia para criar soluções eficientes.
        </p>

        <div className="botoes">
          <a
            href="https://github.com/josiellyr8-byte"
            target="_blank"
            className="btn"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/josielly-santos-a968a61b9/"
            target="_blank"
            className="btn"
          >
            LinkedIn
          </a>
        </div>

        <section className="skills">
          <h2>Tecnologias</h2>

          <div className="skills-list">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">Next.js</span>
            <span className="skill">Salesforce</span>
          </div>
        </section>
      </main>
    </>
  );
}