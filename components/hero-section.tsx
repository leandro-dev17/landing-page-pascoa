'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left side - Title and Subtitle */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Main Title with elegant styling */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-chocolate-900 leading-tight text-balance">
                <span className="block text-gold-600 font-light text-lg mb-2 tracking-widest uppercase">Bem-vindo à</span>
                Receitas que vêm do coração
              </h1>
              
              {/* Subtitle with enhanced styling */}
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl text-chocolate-800 leading-relaxed max-w-lg font-medium">
                  Há mais de 50 anos, compartilhando amor através da boa culinária
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-caramel-500 rounded-full"></div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">♥</span>
                <div>
                  <p className="text-sm text-chocolate-700 font-semibold">Feito com amor</p>
                  <p className="text-xs text-chocolate-600">Tradição de 50+ anos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="text-sm text-chocolate-700 font-semibold">25+ Receitas</p>
                  <p className="text-xs text-chocolate-600">Kit digital completo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20ovos%20de%20colher%20-%20hero.png-WdJvfNFxQ774BkTznU02hkjSTEcQkU.jpeg"
              alt="Ovos de Páscoa artesanais de chocolate"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
