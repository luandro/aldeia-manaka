const RisksTable = ({ risks }) => {
  const getImpactClass = (impact) => {
    return `impact-${impact.toLowerCase()}`;
  };

  const getProbabilityClass = (probability) => {
    return `probability-${probability.toLowerCase()}`;
  };

  return (
    <section className="risks-section">
      <div className="container">
        <h2 className="section-title">Riscos e Mitigações</h2>
        <div className="table-container">
          <table className="risks-table">
            <thead>
              <tr>
                <th>Risco</th>
                <th>Impacto</th>
                <th>Probabilidade</th>
                <th>Mitigação</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk) => (
                <tr key={risk.id}>
                  <td className="risk-name">{risk.risk}</td>
                  <td className="risk-impact">
                    <span className={`impact-badge ${getImpactClass(risk.impact)}`}>
                      {risk.impact}
                    </span>
                  </td>
                  <td className="risk-probability">
                    <span className={`probability-badge ${getProbabilityClass(risk.probability)}`}>
                      {risk.probability}
                    </span>
                  </td>
                  <td className="risk-mitigation">{risk.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RisksTable;
