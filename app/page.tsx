import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { BenefitsSection } from '@/components/benefits-section'
import { SocialProofSection } from '@/components/social-proof-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { FAQSection } from '@/components/faq-section'
import { CTAFinalSection } from '@/components/cta-final-section'
import { Footer } from '@/components/footer'
import { StickyCTA } from '@/components/sticky-cta'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Benefits Section */}
      <section id="benefits">
        <BenefitsSection />
      </section>

      {/* Social Proof Section */}
      <section id="social-proof">
        <SocialProofSection />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Final CTA Section */}
      <section id="cta-final">
        <CTAFinalSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky CTA for mobile */}
      <StickyCTA />
    </main>
  )
}
