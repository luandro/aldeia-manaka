const BudgetSection = ({ budget }) => {
  return (
    <section className="budget-section">
      <div className="container">
        <h2 className="section-title">Orçamento Estimado (Principais Categorias)</h2>
        <div className="budget-list">
          {budget.map((item, index) => (
            <div key={index} className="budget-item">
              <div className="budget-icon">💰</div>
              <div className="budget-text">
                {item.includes(':') ? (
                  <>
                    <strong>{item.split(':')[0]}:</strong>
                    <span>{item.split(':')[1]}</span>
                  </>
                ) : (
                  <span>{item}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;
