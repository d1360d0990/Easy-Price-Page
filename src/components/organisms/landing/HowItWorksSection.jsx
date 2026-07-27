import { steps } from '../../../data/landingContent'
import SectionHeader from '../../molecules/SectionHeader'
import StepCard from '../../molecules/StepCard'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works">
      <SectionHeader
        label="Cómo funciona"
        title="Activa tu negocio en 3 pasos"
        description="Sin configuraciones complejas. Empieza hoy y escanea mañana."
      />
      <div className="steps">
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </section>
  )
}
