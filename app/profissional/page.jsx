export default function Profissional() {
  return (
    <main className="timeline-page">
      <h1 className="page-title">💼 Experiência Profissional</h1>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h2>Atendimento Consultivo B2B</h2>
            <span className="timeline-company">
              Comércio de Equipamentos
            </span>

            <p>
              Atuação com vendas técnicas e consultivas para hotéis,
              pousadas, restaurantes e indústrias.
            </p>

            <div className="tag-container">
              <span className="tag">Análise de Requisitos</span>
              <span className="tag">Negociação</span>
              <span className="tag">Comunicação</span>
              <span className="tag">Soluções Técnicas</span>
              <span className="tag">Gestão de Clientes</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h2>Atendimento Receptivo</h2>
            <span className="timeline-company">
              Call Center
            </span>

            <p>
              Suporte ao cliente e resolução de demandas relacionadas
              a faturamento e atendimento sob alta demanda.
            </p>

            <div className="tag-container">
              <span className="tag">Atendimento</span>
              <span className="tag">Resolução de Problemas</span>
              <span className="tag">Comunicação</span>
              <span className="tag">Gestão Emocional</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}