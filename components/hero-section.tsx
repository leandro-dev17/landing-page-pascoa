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
        <div className="w-full lg:w-2/5">
          {/* Hero - Title and subtitle only */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-white leading-tight text-balance drop-shadow-2xl" style={{textShadow: '0 4px 20px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.9)'}}>
              Receitas que vêm do coração
            </h1>
            <p className="text-2xl text-white leading-relaxed max-w-lg font-medium drop-shadow-lg" style={{textShadow: '0 3px 15px rgba(0,0,0,0.8)'}}>
              Há mais de 50 anos, compartilhando amor através da boa culinária
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
