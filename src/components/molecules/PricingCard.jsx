import { Link } from 'react-router-dom'

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaLink,
  highlighted,
}) {
  return (
    <article className={`pricing-card${highlighted ? ' pricing-card--highlighted' : ''}`}>
      {highlighted && <span className="pricing-card__badge">Más popular</span>}
      <h3 className="pricing-card__name">{name}</h3>
      <div className="pricing-card__price">
        <span className="pricing-card__currency">U$S</span>
        <span className="pricing-card__amount">{price}</span>
        <span className="pricing-card__period">{period}</span>
      </div>
      <p className="pricing-card__desc">{description}</p>
      <ul className="pricing-card__features">
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className={`btn ${highlighted ? 'btn--primary' : 'btn--outline'} pricing-card__cta`}
      >
        {cta}
      </Link>
    </article>
  )
}
