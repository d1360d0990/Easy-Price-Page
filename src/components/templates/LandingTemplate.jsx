import FAQSection from '../organisms/landing/FAQSection'
import FeaturesSection from '../organisms/landing/FeaturesSection'
import FinalCTA from '../organisms/landing/FinalCTA'
import Footer from '../organisms/landing/Footer'
import Hero from '../organisms/landing/Hero'
import HowItWorksSection from '../organisms/landing/HowItWorksSection'
import Navbar from '../organisms/landing/Navbar'
import PricingSection from '../organisms/landing/PricingSection'
import TrustBar from '../organisms/landing/TrustBar'

export default function LandingTemplate() {
  return (
    <div className="landing">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
