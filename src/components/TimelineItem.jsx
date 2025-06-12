const TimelineItem = ({ year, title, content, phase, status, critical, isVisible, animationDelay }) => {
  const itemStyle = {
    animationDelay: animationDelay ? `${animationDelay}ms` : '0ms'
  };

  return (
    <li className={`timeline-item ${critical ? 'critical' : ''} ${status ? status.toLowerCase() : ''}`} style={itemStyle}>
      <div className={`content ${isVisible ? 'visible' : 'hidden'}`}>
        <h2>
          <time>{year}</time>
          {title && <span className="timeline-title">{title}</span>}
          {phase && <span className="timeline-phase">{phase}</span>}
        </h2>
        <p>{content}</p>
        {status && (
          <div className="timeline-status">
            <span className={`status-badge ${status.toLowerCase()}`}>
              {status}
            </span>
            {critical && <span className="critical-badge">Crítico</span>}
          </div>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;
