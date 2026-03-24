'use client'

import Image from 'next/image'

export function StoriesSection() {
  const stories = [
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enfeitando%20ovos%20de%20p%C3%A1scoa-Uv4pVJpcaKvr0tPXW3Tl6nmZq41Tgj.png',
      title: 'Tradição e Criatividade',
      description: 'Cada ovo que decoro é um ato de amor. Cada detalhe é pensado com carinho para trazer alegria para quem recebe.',
      icon: '✨'
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vov%C3%B3%20pintando%20coelho%20da%20p%C3%A1scoa-nz5ANoMcmhZrx7oi5ZKWhmQsgskrjN.png',
      title: 'Dedicação em Cada Pincelada',
      description: 'Paciência, cuidado e muita dedicação. Assim aprendi a fazer receitas que tocam o coração de quem as come.',
      icon: '🎨'
    },
  ]

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-serif font-black text-blue-900 mb-6 text-balance">
            ❤️ Histórias Feitas Com Amor
          </h2>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto font-medium leading-relaxed">
            Cada receita é uma história. Cada preparação é um momento de conexão e carinho com quem amamos.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden mb-8 shadow-2xl border-4 border-white/80 hover:border-white transition-all duration-300">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon on image */}
                <div className="absolute top-6 right-6 text-5xl">{story.icon}</div>
              </div>

              {/* Text content with enhanced styling */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-serif font-black text-blue-900 mb-4">
                  {story.title}
                </h3>
                <p className="text-lg text-blue-800 leading-relaxed font-medium">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main message box */}
        <div className="relative">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-indigo-400/40 to-purple-400/40 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 sm:p-16 text-center shadow-2xl border-2 border-blue-400/50 backdrop-blur-sm">
            <p className="text-6xl mb-6">💝</p>
            
            <h3 className="text-4xl sm:text-5xl font-serif font-black text-white mb-8 text-balance">
              Isso é o que você vai receber
            </h3>

            <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-indigo-300 mx-auto mb-8 rounded-full"></div>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Não é só um kit de receitas. É uma <span className="font-black text-amber-300">coleção de momentos</span>, técnicas e carinho que dediquei à vida toda aperfeiçoando. Cada página, cada vídeo, cada dica vem do coração de alguém que sempre cozinha com amor para as pessoas que importam.
            </p>

            <p className="text-3xl text-amber-300 font-black mt-12">
              ✨ 50+ anos de experiência resumidos em um único kit ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
