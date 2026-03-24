import { HeroSection } from '@/components/hero-section'
import { PerceivedValueSection } from '@/components/perceived-value-section'
import { EbookChaptersSection } from '@/components/ebook-chapters-section'
import { DetailedBonusesSection } from '@/components/detailed-bonuses-section'
import { StoriesSection } from '@/components/stories-section'
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

      {/* Perceived Value Section */}
      <section id="value">
        <PerceivedValueSection />
      </section>

      {/* E-book Chapters Section */}
      <section id="chapters">
        <EbookChaptersSection />
      </section>

      {/* Detailed Bonuses Section */}
      <section id="bonuses">
        <DetailedBonusesSection />
      </section>

      {/* Stories Section - Histórias Feitas com Amor */}
      <section id="stories">
        <StoriesSection />
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
