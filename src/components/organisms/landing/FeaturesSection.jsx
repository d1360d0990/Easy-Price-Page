import { features } from '../../../data/landingContent'
import FeatureCard from '../../molecules/FeatureCard'
import SectionHeader from '../../molecules/SectionHeader'

export default function FeaturesSection() {
  return (
    <section id="features" className="features">
      <SectionHeader
        label="Producto"
        title="Todo lo que tu negocio necesita en un solo lugar"
        description="Desde la gestión de inventario hasta el escaneo en tienda, Easy Price centraliza la operación de precios de tu comercio."
      />
      <div className="features__grid features__grid--6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}
