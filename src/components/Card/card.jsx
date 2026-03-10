import "./card.scss";

export default function Card({
  title,
  badges,
  details,
  image,
  githubLink,
  liveDemo,
  isExpanded,
}) {
  return (
    <div className={`card ${isExpanded ? "card--expanded" : ""}`}>
      <h3>{title}</h3>

      {isExpanded && details && (
        <div className="card-details">
          <h4>Sobre o Projeto:</h4>
          <p className="feito">Feito com:</p>
          <div className="badges">
            <span className="badge">{badges}</span>
          </div>
          <p>{details}</p>
          <hr />
          <img src={image} alt={title} className="card-image" />
        </div>
      )}

      <div className="card-links">
        <a
          href={githubLink}
          target="_blank"
          className="links"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            className="links"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
