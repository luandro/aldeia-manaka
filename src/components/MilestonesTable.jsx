const MilestonesTable = ({ milestones }) => {
  return (
    <section className="milestones-section">
      <div className="container">
        <h2 className="section-title">Marcos Críticos do Projeto</h2>
        <div className="table-container">
          <table className="milestones-table">
            <thead>
              <tr>
                <th>Marco</th>
                <th>Data Limite</th>
                <th>Responsável</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((milestone) => (
                <tr key={milestone.id}>
                  <td className="milestone-name">{milestone.milestone}</td>
                  <td className="milestone-deadline">{milestone.deadline}</td>
                  <td className="milestone-responsible">{milestone.responsible}</td>
                  <td className="milestone-status">
                    <span className={`status-badge ${milestone.status.toLowerCase()}`}>
                      {milestone.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MilestonesTable;
