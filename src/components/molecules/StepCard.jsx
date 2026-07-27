export default function StepCard({ number, title, text }) {
  return (
    <div className="step">
      <span className="step__number">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
