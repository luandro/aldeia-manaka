import { useState, useEffect } from 'react';

const TeamCard = ({ team }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = team.image;
  }, [team.image]);

  return (
    <div className="team-card">
      <div className="team-image">
        {imageLoaded && (
          <img 
            src={team.image} 
            alt={team.title}
            className="team-img"
          />
        )}
        {!imageLoaded && (
          <div className="team-img-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
      <div className="team-content">
        <h3 className="team-title">{team.title}</h3>
        <div className="team-status">
          <span className={`status-badge ${team.status.toLowerCase()}`}>
            {team.status}
          </span>
        </div>
        <div className="team-details">
          <div className="team-section">
            <h4>Responsabilidades:</h4>
            <p>{team.responsibilities}</p>
          </div>
          <div className="team-section">
            <h4>Perfil:</h4>
            <p>{team.profile}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamsSection = ({ teams }) => {
  return (
    <section className="teams-section">
      <div className="container">
        <h2 className="section-title">Equipe do Projeto - Papéis Necessários</h2>
        <div className="teams-grid">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
