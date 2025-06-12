import { useState, useEffect } from 'react';

const HeroSection = ({ project = {} }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!project.heroImage) {
      setImageLoaded(false);
      return;
    }

    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false); // Handle error case
    img.src = project.heroImage;

    // Cleanup function to prevent memory leaks
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [project.heroImage]);

  return (
    <section className="hero-section">
      <div className="hero-background">
        {imageLoaded && (
          <img
            src={project.heroImage}
            alt="Projeto Aldeia Maiacá"
            className="hero-bg-img"
          />
        )}
        {!imageLoaded && (
          <div className="hero-bg-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{project.title || 'Projeto Aldeia Maiacá'}</h1>
          <p className="hero-subtitle">{project.subtitle || 'Aldeia Multi-étnica do Povo Timbira'}</p>
          <div className="hero-dates">
            <span className="date-item">
              <strong>Data de Início:</strong> {project.startDate || 'A definir'}
            </span>
            <span className="date-separator">|</span>
            <span className="date-item">
              <strong>Data Alvo:</strong> {project.targetDate || 'A definir'}
            </span>
          </div>
          <p className="hero-celebration">{project.celebration || 'Celebração em memória'}</p>
          <p className="hero-description">{project.description || 'Um projeto dedicado à criação de uma aldeia multi-étnica.'}</p>
          <div className="hero-cta">
            <button
              className="hero-button"
              onClick={() => {
                const nextSection = document.getElementById('teams-section');
                if (nextSection) {
                  nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
