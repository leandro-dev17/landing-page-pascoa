'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-100">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left side - Title and Subtitle */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-8">
              {/* Greeting */}
              <div className="inline-block">
                <span className="text-orange-600 font-bold text-lg tracking-widest uppercase">👋 Bem-vindo à</span>
              </div>

              {/* Main Title with elegant styling */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-amber-900 leading-tight text-balance">
                Receitas que vêm do coração
              </h1>
              
              {/* Decorative line */}
              <div className="h-1.5 w-32 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 rounded-full"></div>

              {/* Subtitle with enhanced styling */}
              <p className="text-2xl sm:text-3xl text-amber-800 leading-relaxed max-w-lg font-semibold">
                Há mais de 50 anos, compartilhando amor através da boa culinária
              </p>
            </div>

            {/* Trust badges - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all">
                <span className="text-4xl">♥</span>
                <div>
                  <p className="font-black text-amber-900">Feito com Amor</p>
                  <p className="text-sm text-amber-700">Tradição de 50+ anos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all">
                <span className="text-4xl">📚</span>
                <div>
                  <p className="font-black text-blue-900">25+ Receitas</p>
                  <p className="text-sm text-blue-700">Kit digital completo</p>
                </div>
              </div>
            </div>

            {/* CTA button hint */}
            <div className="pt-4">
              <p className="text-sm text-amber-700 font-semibold animate-pulse">
                ⬇️ Veja a oferta especial logo abaixo
              </p>
            </div>
          </div>

          {/* Right side - Image with glow effect */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] order-1 lg:order-2 group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-red-400/40 to-rose-400/40 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20ovos%20de%20colher%20-%20hero.png-WdJvfNFxQ774BkTznU02hkjSTEcQkU.jpeg"
                alt="Ovos de Páscoa artesanais de chocolate"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-3xl shadow-2xl font-black text-lg border-2 border-white">
              🔥 94% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
