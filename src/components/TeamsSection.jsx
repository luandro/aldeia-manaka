import { useState, useEffect } from 'react';

const TeamCard = ({ team = {} }) => {
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

  return (
    <div className="team-card">
      <div className="team-header">
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
        <div className="team-info">
          <h3 className="team-title">{team.title || 'Função não definida'}</h3>
          <div className="team-status">
            <span className={`status-badge ${(team.status || 'pendente').toLowerCase()}`}>
              {team.status || 'Pendente'}
            </span>
          </div>
        </div>
      </div>
      <div className="team-content">
        <div className="team-details">
          <div className="team-section">
            <h4>Responsabilidades:</h4>
            <p>{team.responsibilities || 'Responsabilidades a serem definidas'}</p>
          </div>
          <div className="team-section">
            <h4>Perfil:</h4>
            <p>{team.profile || 'Perfil a ser definido'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamsSection = ({ teams = [] }) => {
  return (
    <section className="teams-section">
      <div className="container">
        <h2 className="section-title">Equipe do Projeto - Papéis Necessários</h2>
        <div className="teams-grid">
          {teams.length > 0 ? (
            teams.map((team, index) => (
              <TeamCard key={team.id || index} team={team} />
            ))
          ) : (
            <div className="no-teams-message">
              <p>Nenhuma equipe definida ainda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
