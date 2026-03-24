'use client'

export function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-chocolate-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            Por que escolher as receitas da Vovó
          </h2>
          <p className="text-lg text-chocolate-700 max-w-2xl mx-auto">
            Não é publicidade. É verdade que vem do coração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '50+',
              title: 'Anos de Paixão',
              description: 'Cinco décadas dedicadas a aperfeiçoar cada receita, cada técnica, cada detalhe. Isso não se compra em qualquer lugar.'
            },
            {
              number: '♥',
              title: 'Feito com Amor',
              description: 'Cada receita é um reflexo do cuidado, paciência e dedicação que coloco em tudo o que faço. Isso transmite na primeira mordida.'
            },
            {
              number: '📱',
              title: 'Simples e Acessível',
              description: 'Não importa se você é iniciante ou experiente. Cada passo é claro, cada vídeo é fácil de seguir, cada receita é realista.'
            },
            {
              number: '👨‍👩‍👧‍👦',
              title: 'Tradição Familiar',
              description: 'Essas receitas fazem parte da história da minha família. Agora podem fazer parte da história da sua também.'
            },
            {
              number: '💎',
              title: 'Qualidade Premium',
              description: 'Ingredientes selecionados, técnicas profissionais, apresentação impecável. Mas acessível para todos.'
            },
            {
              number: '🎯',
              title: 'Comprovado',
              description: 'Centenas de pessoas já transformaram seus negócios, seus hobbies, suas vidas compartilhando essas receitas.'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-chocolate-200">
              <div className="text-5xl mb-4">{item.number}</div>
              <h3 className="text-xl font-bold text-chocolate-900 mb-3">{item.title}</h3>
              <p className="text-chocolate-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-chocolate-900 to-chocolate-800 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Isso é um investimento em você, sua família e seus sonhos
          </h3>
          <p className="text-cream-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Quando você escolhe essas receitas, você não está comprando um produto. Está abrindo uma porta para tradição, para conexão, para criação. Para compartilhar com quem ama exatamente como eu compartilho com você agora.
          </p>
          <p className="text-cream-200 text-base">
            Com amor,<br />
            <span className="font-serif text-2xl">Vovó Teresinha</span>
          </p>
        </div>
      </div>
    </section>
  )
}
