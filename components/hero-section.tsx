'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20ovos%20de%20colher%20-%20hero.png-WdJvfNFxQ774BkTznU02hkjSTEcQkU.jpeg"
          alt="Ovos de Páscoa artesanais de chocolate"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate-900/85 via-chocolate-900/75 to-chocolate-900/50"></div>
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chocolate-900/40 to-chocolate-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 min-h-screen flex items-center">
        <div className="w-full lg:w-1/2 xl:w-1/3">
          {/* Warm opening */}
          <div className="space-y-6 mb-8">
            <p className="text-gold-200 font-medium text-base tracking-wide">Com todo meu carinho</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-cream-50 leading-tight text-balance">
              Receitas que vêm do coração
            </h1>
            <p className="text-xl text-cream-100 leading-relaxed max-w-lg">
              Há mais de 50 anos, coloco amor em cada receita de Páscoa. Agora compartilho com você e sua família toda a magia e carinho que fazem essas receitas especiais.
            </p>
          </div>

          {/* Emotional value proposition */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <span className="text-3xl flex-shrink-0">♥</span>
              <div>
                <h3 className="font-bold text-cream-50 mb-1">Mais que receitas</h3>
                <p className="text-cream-100">É tradição, é conexão, é a herança de amor que passa de geração em geração</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl flex-shrink-0">📚</span>
              <div>
                <h3 className="font-bold text-cream-50 mb-1">Kit digital completo</h3>
                <p className="text-cream-100">25+ receitas com vídeos, ingredientes detalhados e técnicas que aprendi ao longo dos anos</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl flex-shrink-0">∞</span>
              <div>
                <h3 className="font-bold text-cream-50 mb-1">Seu para sempre</h3>
                <p className="text-cream-100">Acesso vitalício. Sem mensalidades. Sem expirações. Compartilhe com quem ama.</p>
              </div>
            </div>
          </div>

          {/* Price box - with semi-transparent background */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cream-50/30 mb-8">
            <p className="text-cream-100 text-sm mb-3">Investimento hoje:</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gold-200">R$ 37,90</span>
              <span className="text-sm text-cream-200 line-through">R$ 685,00</span>
              <span className="text-xs font-bold bg-caramel-500 text-cream-50 px-3 py-1 rounded-full">94% OFF</span>
            </div>
            <p className="text-xs text-cream-100 mt-3">Uma única compra. Acesso para a vida toda.</p>
          </div>

          {/* CTAs - warm and inviting */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-chocolate-900 font-bold py-7 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero Compartilhar Esse Amor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cream-50 text-cream-50 hover:bg-cream-50/10 font-semibold py-7 text-base rounded-xl transition-all duration-300"
            >
              Garantia de 7 Dias
            </Button>
          </div>

          {/* Authentic trust markers */}
          <div className="flex flex-wrap gap-8 text-sm pt-6 border-t border-cream-50/20">
            <div>
              <p className="font-bold text-cream-50 text-lg">50+ Anos</p>
              <p className="text-cream-100">dedicados à culinária</p>
            </div>
            <div>
              <p className="font-bold text-cream-50 text-lg">25+ Receitas</p>
              <p className="text-cream-100">de Páscoa exclusivas</p>
            </div>
            <div>
              <p className="font-bold text-cream-50 text-lg">Feito com ♥</p>
              <p className="text-cream-100">em cada detalhe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
