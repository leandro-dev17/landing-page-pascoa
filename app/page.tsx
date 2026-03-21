import { HeroSection } from '@/components/hero-section'
import { StoriesSection } from '@/components/stories-section'
import { WhatYouGetSection } from '@/components/what-you-get-section'
import { WhyChooseSection } from '@/components/why-choose-section'
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

      {/* Stories Section - Authentic moments */}
      <section id="stories">
        <StoriesSection />
      </section>

      {/* What You Get Section */}
      <section id="what-you-get">
        <WhatYouGetSection />
      </section>

      {/* Why Choose Section */}
      <section id="why-choose">
        <WhyChooseSection />
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
