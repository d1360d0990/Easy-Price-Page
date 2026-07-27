import { faqs } from '../../../data/landingContent'
import FaqItem from '../../molecules/FaqItem'
import SectionHeader from '../../molecules/SectionHeader'

export default function FAQSection() {
  return (
    <section id="faq" className="faq">
      <SectionHeader label="FAQ" title="Preguntas frecuentes" />
      <div className="faq__list">
        {faqs.map((item) => (
          <FaqItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  )
}
