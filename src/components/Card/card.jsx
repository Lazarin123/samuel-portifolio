import "./card.scss";

export default function Card({
  title,
  details,
  githubLink,
  liveDemo,
  isExpanded,
}) {
  return (
    <div className={`card ${isExpanded ? "card--expanded" : ""}`}>
      <h3>{title}</h3>

      {isExpanded && details && (
        <div className="card-details">
          <hr />
          <h4>Sobre o Projeto:</h4>
          <br />
          <p>{details}</p>
        </div>
      )}

      <div className="card-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
