import { useState, useEffect } from 'react';

const HeroSection = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = project.heroImage;
  }, [project.heroImage]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{project.title}</h1>
          <p className="hero-subtitle">{project.subtitle}</p>
          <div className="hero-dates">
            <span className="date-item">
              <strong>Data de Início:</strong> {project.startDate}
            </span>
            <span className="date-separator">|</span>
            <span className="date-item">
              <strong>Data Alvo:</strong> {project.targetDate}
            </span>
          </div>
          <p className="hero-celebration">{project.celebration}</p>
          <p className="hero-description">{project.description}</p>
        </div>
        <div className="hero-image">
          {imageLoaded && (
            <img 
              src={project.heroImage} 
              alt="Projeto Aldeia Maiacá"
              className="hero-img"
            />
          )}
          {!imageLoaded && (
            <div className="hero-img-placeholder">
              <div className="loading-spinner"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
