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
        {/* Strong dark overlay for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/50"></div>
        {/* Additional vertical gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
        {/* Extra dark vignette on left side for text area */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 min-h-screen flex items-center">
        <div className="w-full lg:w-1/2 xl:w-1/3">
          {/* Warm opening */}
          <div className="space-y-6 mb-8">
            <p className="text-gold-300 font-medium text-lg tracking-widest uppercase drop-shadow-lg">Com todo meu carinho</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-white leading-tight text-balance drop-shadow-2xl" style={{textShadow: '0 4px 20px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.9)'}}>
              Receitas que vêm do coração
            </h1>
            <p className="text-2xl text-white leading-relaxed max-w-lg font-medium drop-shadow-lg" style={{textShadow: '0 3px 15px rgba(0,0,0,0.8)'}}>
              Há mais de 50 anos, coloco amor em cada receita de Páscoa. Agora compartilho com você e sua família toda a magia e carinho que fazem essas receitas especiais.
            </p>
          </div>

          {/* Emotional value proposition */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <span className="text-4xl flex-shrink-0 drop-shadow-lg">♥</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1 drop-shadow-md">Mais que receitas</h3>
                <p className="text-gray-100 drop-shadow-md">É tradição, é conexão, é a herança de amor que passa de geração em geração</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <span className="text-4xl flex-shrink-0 drop-shadow-lg">📚</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1 drop-shadow-md">Kit digital completo</h3>
                <p className="text-gray-100 drop-shadow-md">25+ receitas com vídeos, ingredientes detalhados e técnicas que aprendi ao longo dos anos</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <span className="text-4xl flex-shrink-0 drop-shadow-lg">∞</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1 drop-shadow-md">Seu para sempre</h3>
                <p className="text-gray-100 drop-shadow-md">Acesso vitalício. Sem mensalidades. Sem expirações. Compartilhe com quem ama.</p>
              </div>
            </div>
          </div>

          {/* Price box - with semi-transparent background */}
          <div className="bg-gold-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-gold-400 mb-8 shadow-xl" style={{boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)'}}>
            <p className="text-gold-200 text-sm mb-3 font-semibold uppercase tracking-wider drop-shadow-md">Investimento hoje:</p>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl font-black text-gold-300 drop-shadow-lg">R$ 37,90</span>
              <span className="text-lg text-white/70 line-through drop-shadow-md">R$ 685,00</span>
              <span className="text-sm font-black bg-red-600 text-white px-4 py-2 rounded-full drop-shadow-lg">94% OFF</span>
            </div>
            <p className="text-white text-sm drop-shadow-md font-medium">Uma única compra. Acesso para a vida toda.</p>
          </div>

          {/* CTAs - warm and inviting */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-black font-black py-8 text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 uppercase tracking-wide drop-shadow-lg"
            >
              Quero Compartilhar Esse Amor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-3 border-white text-white hover:bg-white hover:text-black font-bold py-8 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 drop-shadow-lg"
            >
              Garantia de 7 Dias
            </Button>
          </div>

          {/* Authentic trust markers */}
          <div className="flex flex-wrap gap-8 text-sm pt-8 border-t-2 border-white/20">
            <div>
              <p className="font-black text-gold-300 text-2xl drop-shadow-lg">50+ Anos</p>
              <p className="text-white/90 drop-shadow-md font-medium">dedicados à culinária</p>
            </div>
            <div>
              <p className="font-black text-gold-300 text-2xl drop-shadow-lg">25+ Receitas</p>
              <p className="text-white/90 drop-shadow-md font-medium">de Páscoa exclusivas</p>
            </div>
            <div>
              <p className="font-black text-gold-300 text-2xl drop-shadow-lg">Feito com ♥</p>
              <p className="text-white/90 drop-shadow-md font-medium">em cada detalhe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
