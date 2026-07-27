export default function FeatureCard({ icon, title, description, accent }) {
  return (
    <article className={`feature-card feature-card--${accent}`}>
      <span className="feature-card__icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
