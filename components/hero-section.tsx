'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-cream-50 via-white to-gold-50 overflow-hidden pt-20 pb-16">
      {/* Soft background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-caramel-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content - Story & emotion */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Warm opening */}
            <div className="space-y-4">
              <p className="text-caramel-700 font-medium text-base tracking-wide">Com todo meu carinho</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-chocolate-900 leading-tight text-balance">
                Receitas que vêm do coração
              </h1>
              <p className="text-xl text-chocolate-700 leading-relaxed max-w-lg">
                Há mais de 50 anos, coloco amor em cada receita de Páscoa. Agora compartilho com você e sua família toda a magia e carinho que fazem essas receitas especiais.
              </p>
            </div>

            {/* Emotional value proposition */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-3xl">♥</span>
                <div>
                  <h3 className="font-bold text-chocolate-900 mb-1">Mais que receitas</h3>
                  <p className="text-chocolate-700">É tradição, é conexão, é a herança de amor que passa de geração em geração</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-3xl">📚</span>
                <div>
                  <h3 className="font-bold text-chocolate-900 mb-1">Kit digital completo</h3>
                  <p className="text-chocolate-700">25+ receitas com vídeos, ingredientes detalhados e técnicas que aprendi ao longo dos anos</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-3xl">∞</span>
                <div>
                  <h3 className="font-bold text-chocolate-900 mb-1">Seu para sempre</h3>
                  <p className="text-chocolate-700">Acesso vitalício. Sem mensalidades. Sem expirações. Compartilhe com quem ama.</p>
                </div>
              </div>
            </div>

            {/* Price - emphasizing value, not discount aggression */}
            <div className="bg-gradient-to-r from-chocolate-50 to-gold-50 rounded-2xl p-6 border border-chocolate-200">
              <p className="text-chocolate-700 text-sm mb-3">Investimento hoje:</p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-chocolate-900">R$ 37,90</span>
                <span className="text-sm text-chocolate-700 line-through">R$ 685,00</span>
                <span className="text-xs font-bold bg-caramel-500 text-white px-3 py-1 rounded-full">94% OFF</span>
              </div>
              <p className="text-xs text-chocolate-600 mt-3">Uma única compra. Acesso para a vida toda.</p>
            </div>

            {/* CTAs - warm and inviting */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-chocolate-900 hover:bg-chocolate-800 text-cream-50 font-bold py-7 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Quero Compartilhar Esse Amor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-chocolate-900 text-chocolate-900 hover:bg-chocolate-50 font-semibold py-7 text-base rounded-xl transition-all duration-300"
              >
                Garantia de 7 Dias ✓
              </Button>
            </div>

            {/* Authentic trust markers */}
            <div className="flex flex-wrap gap-6 text-sm pt-6 border-t border-chocolate-200">
              <div>
                <p className="font-bold text-chocolate-900 text-lg">50+ Anos</p>
                <p className="text-chocolate-700">dedicados à culinária</p>
              </div>
              <div>
                <p className="font-bold text-chocolate-900 text-lg">25+ Receitas</p>
                <p className="text-chocolate-700">de Páscoa exclusivas</p>
              </div>
              <div>
                <p className="font-bold text-chocolate-900 text-lg">Feito com ♥</p>
                <p className="text-chocolate-700">em cada detalhe</p>
              </div>
            </div>
          </div>

          {/* Right side - Beautiful image of Vovó */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vov%C3%B3%20pintando%20coelho%20da%20p%C3%A1scoa-nz5ANoMcmhZrx7oi5ZKWhmQsgskrjN.png"
              alt="Vovó Teresinha pintando coelho de páscoa com amor e dedicação"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
