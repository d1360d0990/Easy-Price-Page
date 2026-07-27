import SectionLabel from '../atoms/SectionLabel'

export default function SectionHeader({ label, title, description }) {
  return (
    <div className="section-header">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
