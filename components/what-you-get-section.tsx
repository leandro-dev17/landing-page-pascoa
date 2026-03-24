'use client'

import Image from 'next/image'

export function WhatYouGetSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div>
              <p className="text-caramel-700 font-semibold text-base mb-2">Seu Kit Completo Inclui</p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900">
                Tudo o que você precisa para criar com amor
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '📖',
                  title: '25+ Receitas Exclusivas',
                  desc: 'Bolos, brigadeiros, ovos de chocolate, e muito mais. Cada uma testada e aperfeiçoada ao longo dos anos.'
                },
                {
                  icon: '🎬',
                  title: 'Vídeos Passo a Passo',
                  desc: 'Aprenda comigo enquanto preparo cada receita. Como se estivéssemos juntas na cozinha.'
                },
                {
                  icon: '📋',
                  title: 'Ingredientes e Técnicas',
                  desc: 'Listas completas, medidas precisas, dicas de profissional e truques que aprendi na vida.'
                },
                {
                  icon: '💰',
                  title: 'Guia de Precificação',
                  desc: 'Como cobrar suas criações, como vender e como fazer isso com elegância e dignidade.'
                },
                {
                  icon: '🎁',
                  title: 'Bônus Especiais',
                  desc: 'Embalagens criativas, ideias de apresentação, e como fazer tudo parecer ainda mais especial.'
                },
                {
                  icon: '∞',
                  title: 'Acesso para Sempre',
                  desc: 'Sem limites, sem expirações. Suas receitas, seus vídeos, sempre disponíveis quando precisar.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-chocolate-900 mb-1">{item.title}</h4>
                    <p className="text-chocolate-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image showcase */}
          <div className="relative">
            <div className="relative h-[500px] sm:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20apresenta%C3%A7%C3%B5es%20ebook-KU00dZ8RGIEvIIL5cYD3sKPTMnqse7.png"
                alt="Kit de Páscoa Lucrativa - Mockup do eBook em diferentes dispositivos"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
