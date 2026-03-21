import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-cream-50 via-cream-50 to-chocolate-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-caramel-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-chocolate-100 px-4 py-2 rounded-full">
              <span className="text-2xl">⏰</span>
              <span className="text-sm font-bold text-chocolate-900">Promoção válida por HOJE apenas!</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-chocolate-900 leading-tight text-balance">
                As Receitas de Páscoa da Vovó Teresinha
              </h1>
              <p className="text-lg sm:text-xl text-chocolate-700">
                25+ receitas tradicionais + vídeos de como fazer + acesso vitalício
              </p>
            </div>

            {/* Main value proposition */}
            <div className="bg-white rounded-xl p-6 border-2 border-gold-300">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🎁</span>
                <div>
                  <p className="font-bold text-chocolate-900 mb-2">Kit Completo Digital</p>
                  <p className="text-sm text-chocolate-700">
                    Você recebe tudo por email na hora! Nenhuma espera, nenhuma mensalidade. Uma única compra, acesso para sempre.
                  </p>
                </div>
              </div>
            </div>

            {/* Price and discount */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-chocolate-700 line-through">R$ 685,00</span>
                <span className="text-5xl font-bold text-caramel-600">R$ 37,90</span>
              </div>
              <span className="text-sm font-bold bg-chocolate-900 text-cream-50 px-3 py-1 rounded-full">94% OFF</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-chocolate-900 hover:bg-chocolate-800 text-cream-50 font-bold py-6 text-base rounded-xl h-auto">
                Quero Meu Kit Agora
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-chocolate-900 text-chocolate-900 hover:bg-chocolate-50 font-bold py-6 text-base rounded-xl h-auto">
                Garantia de 7 Dias ✓
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-bold text-chocolate-900">4.9 ⭐</p>
                <p className="text-chocolate-700">+500 clientes satisfeitos</p>
              </div>
              <div>
                <p className="font-bold text-chocolate-900">50 Anos</p>
                <p className="text-chocolate-700">de experiência culinária</p>
              </div>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-chocolate-200 to-caramel-200 flex items-center justify-center">
            <Image
              src="/vovo-teresinha.jpg"
              alt="Vovó Teresinha com seu kit especial de receitas de Páscoa"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
