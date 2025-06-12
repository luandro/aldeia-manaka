const TimelineItem = ({ index, year, title, content, isVisible, animationDelay }) => {
  const itemStyle = {
    animationDelay: animationDelay ? `${animationDelay}ms` : '0ms'
  };

  return (
    <li className="timeline-item" style={itemStyle}>
      <div className={`content ${isVisible ? 'visible' : 'hidden'}`}>
        <h2>
          <time>{year}</time>
          {title && <span className="timeline-title">{title}</span>}
        </h2>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default TimelineItem;
