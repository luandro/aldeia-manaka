const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h3 className="footer-title">Projeto Aldeia Maiacá</h3>
            <p className="footer-description">
              Aldeia Multi-étnica do Povo Timbira em memória de Bruno Braga
            </p>
          </div>
          
          <div className="footer-info">
            <div className="footer-section">
              <h4>Contato</h4>
              <p>Para mais informações sobre o projeto</p>
            </div>
            
            <div className="footer-section">
              <h4>Cronograma</h4>
              <p>Junho 2025 - Abril 2026</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Projeto Aldeia Maiacá. Todos os direitos reservados.</p>
            <p className="footer-tribute">Em memória de Bruno Braga</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
