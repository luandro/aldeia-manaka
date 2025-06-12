import { useState, useEffect } from 'react';

const TeamMember = ({ team = {}, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!team.image) {
      setImageLoaded(false);
      return;
    }

    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = team.image;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [team.image]);

  const isEven = index % 2 === 0;

  return (
    <div className={`team-member ${isEven ? 'team-member-left' : 'team-member-right'}`}>
      <div className="team-visual">
        <div className="team-avatar-container">
          <div className="team-avatar-ring">
            <div className="team-avatar">
              {imageLoaded && (
                <img
                  src={team.image}
                  alt={team.title}
                  className="team-avatar-img"
                />
              )}
              {!imageLoaded && (
                <div className="team-avatar-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              )}
            </div>
          </div>
          <div className="team-status-indicator">
            <span className={`status-dot ${(team.status || 'pendente').toLowerCase()}`}></span>
          </div>
        </div>
      </div>

      <div className="team-info-container">
        <div className="team-info-content">
          <h3 className="team-title">{team.title || 'Função não definida'}</h3>
          <div className="team-status-text">
            <span className={`status-label ${(team.status || 'pendente').toLowerCase()}`}>
              {team.status || 'Pendente'}
            </span>
          </div>

          <div className="team-details">
            <div className="team-detail-item">
              {/* <div className="detail-icon">🎯</div> */}
              <div className="detail-content">
                <h4>Responsabilidades</h4>
                <p>{team.responsibilities || 'Responsabilidades a serem definidas'}</p>
              </div>
            </div>

            <div className="team-detail-item">
              {/* <div className="detail-icon">👤</div> */}
              <div className="detail-content">
                <h4>Perfil</h4>
                <p>{team.profile || 'Perfil a ser definido'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamsSection = ({ teams = [] }) => {
  return (
    <section id="teams-section" className="teams-section">
      <div className="container">
        <h2 className="section-title">Equipe do Projeto</h2>
        <div className="teams-timeline">
          {teams.length > 0 ? (
            teams.map((team, index) => (
              <TeamMember key={team.id || index} team={team} index={index} />
            ))
          ) : (
            <div className="no-teams-message">
              <div className="no-teams-icon">👥</div>
              <h3>Equipe em Formação</h3>
              <p>Os papéis da equipe estão sendo definidos para o projeto.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
