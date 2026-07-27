import { plans } from '../../../data/landingContent'
import PricingCard from '../../molecules/PricingCard'
import SectionHeader from '../../molecules/SectionHeader'

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing">
      <SectionHeader
        label="Precios"
        title="Planes simples, sin sorpresas"
        description="Elige el plan que se adapte a tu negocio. Escala cuando lo necesites."
      />
      <div className="pricing__grid">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  )
}
