export function BenefitsSection() {
  const benefits = [
    {
      icon: '📖',
      title: 'Kit Digital Completo',
      description: 'Acesso a 25+ receitas profissionais em PDF, prontas para imprimir'
    },
    {
      icon: '🎥',
      title: 'Vídeos Passo a Passo',
      description: 'Aprenda cada receita acompanhando Vovó fazendo em vídeo HD'
    },
    {
      icon: '🍫',
      title: 'Receitas Testadas',
      description: 'Cada receita foi testada centenas de vezes com sucesso garantido'
    },
    {
      icon: '⏱️',
      title: 'Tempo de Preparo',
      description: 'Receitas rápidas e práticas, a maioria pronta em 30 minutos'
    },
    {
      icon: '🎁',
      title: 'Bônus Extras',
      description: 'Guia de apresentação, dicas de conservação e lista de compras'
    },
    {
      icon: '♾️',
      title: 'Acesso Vitalício',
      description: 'Uma única compra, acesso forever. Sem renovação, sem mensalidade'
    },
  ]

  return (
    <section className="w-full bg-cream-50 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 text-balance">
            O Que Você Vai Receber
          </h2>
          <p className="text-lg text-chocolate-700 max-w-2xl mx-auto">
            Um kit completo com tudo que você precisa para fazer as melhores receitas de Páscoa da sua vida
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-cream-200 hover:border-chocolate-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-chocolate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-chocolate-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-chocolate-700 mb-4">
            Tudo isso por apenas <span className="font-bold text-caramel-600 text-lg">R$ 37,90</span>
          </p>
          <p className="text-sm text-chocolate-600">
            Garantia 100% ou seu dinheiro de volta em 7 dias. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  )
}
