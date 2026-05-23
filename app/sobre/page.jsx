export default function Sobre() {
  // Estilos compartilhados para os blocos (cards)
  const cardStyle = {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#f9f9f9", // Um fundo cinza bem claro para destacar do fundo branco
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.02)"
  };

  const titleStyle = {
    fontSize: "1.2rem",
    margin: "12px 0",
    color: "#1f2937"
  };

  const textStyle = {
    fontSize: "0.95rem",
    color: "#4b5563",
    lineheight: "1.6"
  };

  return (
    <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Sobre Mim</h1>

      
      <section style={{ marginBottom: "40px", fontSize: "1.1rem", lineHeight: "1.6", color: "#374151" }}>
        <p>
          Estudante de Sistemas para Internet com foco em desenvolvimento web e 
          modelagem de sistemas. Possuo experiência profissional em atendimento 
          consultivo B2B, atuando com levantamento de requisitos, análise de 
          necessidades e proposição de soluções técnicas.
        </p>

        <p>
          Minha trajetória em atendimento e vendas desenvolveu habilidades 
          estratégicas como comunicação com stakeholders, resolução de problemas, 
          organização de demandas e tomada de decisão baseada em contexto  
          competências que aplico na construção de soluções tecnológicas.
        </p>

        <p>
          Busco minha primeira oportunidade na área de tecnologia para atuar 
          com desenvolvimento, suporte ou análise de sistemas, contribuindo com 
          visão analítica, aprendizado contínuo e foco em resultados.
        </p>
      </section>

      {/* Nova Seção com os Blocos de Valores e História */}
      <h2 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>Valores & Trajetória</h2>
      
      <section style={{ 
        display: "flex", 
        gap: "24px", 
        flexWrap: "wrap", 
        justifyContent: "space-between" 
      }}>
        
        {/* Bloco 1: Identidade */}
        <article style={cardStyle}>
          <div style={{ fontSize: "2rem" }}>✨</div>
          <h3 style={titleStyle}>Quem Sou Eu</h3>
          <p style={textStyle}>
            Sou uma pessoa movida por desafios e pela certeza de que sempre há espaço para evoluir. 
            Cristã, empática e determinada, escolhi não me acomodar na zona de conforto. Busco 
            constantemente explorar o melhor do meu potencial, com a mente aberta para reconhecer 
            erros, aprender com eles e seguir em frente.
          </p>
        </article>

        {/* Bloco 2: Bagagem */}
        <article style={cardStyle}>
          <div style={{ fontSize: "2rem" }}>💼</div>
          <h3 style={titleStyle}>Minha Bagagem</h3>
          <p style={textStyle}>
            Minha base forte foi construída no setor de <em>call center</em>, onde me auxiliei a 
            desenvolver uma comunicação assertiva, inteligência emocional e negociação. Hoje, na área 
            de vendas, continuo aplicando essa facilidade de entender as reais necessidades e 
            dores das pessoas.
          </p>
        </article>

        {/* Bloco 3: Propósito */}
        <article style={cardStyle}>
          <div style={{ fontSize: "2rem" }}>❤️</div>
          <h3 style={titleStyle}>Propósito & Impacto</h3>
          <p style={textStyle}>
            Acredito que o crescimento profissional deve caminhar junto com a solidariedade. 
            Por isso, dedico parte do meu tempo a ações voluntárias, visitando orfanatos e casas 
            de apoio uma paixão por ajudar o próximo que se intensificou durante a pandemia e que 
            mantenho ativamente até hoje.
          </p>
        </article>

      </section>
    </main>
  );
}
