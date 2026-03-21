'use client'

import Image from 'next/image'

export function StoriesSection() {
  const stories = [
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enfeitando%20ovos%20de%20p%C3%A1scoa-Uv4pVJpcaKvr0tPXW3Tl6nmZq41Tgj.png',
      title: 'Tradição e Criatividade',
      description: 'Cada ovo que decoro é um ato de amor. Cada detalhe é pensado com carinho para trazer alegria para quem recebe.'
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vov%C3%B3%20pintando%20coelho%20da%20p%C3%A1scoa-nz5ANoMcmhZrx7oi5ZKWhmQsgskrjN.png',
      title: 'Dedicação em Cada Pincelada',
      description: 'Paciência, cuidado e muita dedicação. Assim aprendi a fazer receitas que tocam o coração de quem as come.'
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            Histórias feitas com amor
          </h2>
          <p className="text-lg text-chocolate-700 max-w-2xl mx-auto">
            Cada receita é uma história. Cada preparação é um momento de conexão e carinho com quem amo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden mb-6 shadow-xl">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-chocolate-900 mb-3">
                {story.title}
              </h3>
              <p className="text-chocolate-700 leading-relaxed">
                {story.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-chocolate-50 via-gold-50 to-caramel-50 rounded-3xl p-8 sm:p-12 text-center border border-chocolate-200">
          <p className="text-lg text-chocolate-800 mb-4">
            <span className="text-4xl">♥</span>
          </p>
          <h3 className="text-3xl font-serif font-bold text-chocolate-900 mb-4">
            Isso é o que você vai receber
          </h3>
          <p className="text-chocolate-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Não é só um kit de receitas. É uma coleção de momentos, técnicas e carinho que dediquei à vida toda aperfeiçoando. Cada página, cada vídeo, cada dica vem do coração de alguém que sempre cozinha com amor para as pessoas que importam.
          </p>
        </div>
      </div>
    </section>
  )
}
