import { HeroSection } from '../components/landing/HeroSection'
import { ProblemSection } from '../components/landing/ProblemSection'
import { FeatureShowcase } from '../components/landing/FeatureShowcase'
import { HowItWorks } from '../components/landing/HowItWorks'
import { IntegrationsSection } from '../components/landing/IntegrationsSection'
import { SocialProof } from '../components/landing/SocialProof'
import { PricingSection } from '../components/landing/PricingSection'
import { FinalCTA } from '../components/landing/FinalCTA'

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <FeatureShowcase />
      <HowItWorks />
      <IntegrationsSection />
      <SocialProof />
      <PricingSection />
      <FinalCTA />
    </main>
  )
}
