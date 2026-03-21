import Image from 'next/image'

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Faça Seu Pedido',
      description: 'Clique no botão "Quero Meu Kit Agora" e escolha sua forma de pagamento'
    },
    {
      number: '2',
      title: 'Acesso Imediato',
      description: 'Receba um email com o link para acessar seu kit completo na hora'
    },
    {
      number: '3',
      title: 'Comece a Cozinhar',
      description: 'Baixe os PDFs, assista aos vídeos e prepare as receitas da Vovó'
    },
    {
      number: '4',
      title: 'Compartilhe & Lucre',
      description: 'Venda as sobremesas ou compartilhe com a família. O kit é seu!'
    }
  ]

  const bonuses = [
    {
      icon: '📚',
      title: 'Guia de Embalagem',
      value: 'R$ 97,00',
      description: 'Aprenda as melhores formas de embalar e presentear suas sobremesas'
    },
    {
      icon: '⏰',
      title: 'Guia de Conservação',
      value: 'R$ 67,00',
      description: 'Saiba como guardar cada receita para durarem mais tempo fresco'
    },
    {
      icon: '🛒',
      title: 'Lista de Compras',
      value: 'R$ 47,00',
      description: 'Todas as receitas com lista completa de ingredientes prontos'
    },
    {
      icon: '👨‍🍳',
      title: 'Grupo Exclusivo',
      value: 'R$ 150,00',
      description: 'Acesso ao grupo da Vovó com dicas extras e suporte direto'
    }
  ]

  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-chocolate-900 text-balance">
              Como Funciona
            </h2>
            <p className="text-lg text-chocolate-700">
              Super simples e rápido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-3 w-6 h-1 bg-chocolate-200"></div>
                )}

                {/* Card */}
                <div className="bg-cream-50 rounded-xl p-6 text-center border-2 border-chocolate-200 hover:border-chocolate-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-chocolate-900 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-chocolate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-chocolate-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="bg-gradient-easter rounded-2xl p-8 sm:p-12 border-2 border-chocolate-300">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm font-bold text-chocolate-900 bg-white w-fit px-4 py-2 rounded-full mx-auto">
              ✨ SUPER BÔNUS ✨
            </p>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate-900 text-balance">
              Receba R$ 358,00 em Bônus
            </h2>
            <p className="text-lg text-chocolate-800">
              Completamente GRÁTIS se você comprar HOJE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-chocolate-200 flex gap-4 items-start hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl flex-shrink-0">
                  {bonus.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-chocolate-900 mb-1">
                    {bonus.title}
                  </h3>
                  <p className="text-xs text-caramel-600 font-bold mb-2 line-through">
                    Valor: {bonus.value}
                  </p>
                  <p className="text-sm text-chocolate-700">
                    {bonus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value summary */}
          <div className="mt-8 pt-8 border-t-2 border-chocolate-300 text-center">
            <p className="text-chocolate-900 font-semibold mb-2">
              Valor Total dos Bônus: <span className="text-2xl">R$ 358,00</span>
            </p>
            <p className="text-chocolate-800 font-bold">
              Mas você paga <span className="text-caramel-600 text-2xl">ZERO</span> quando comprar hoje
            </p>
          </div>

          {/* Mockup image */}
          <div className="mt-12 relative h-96 rounded-2xl overflow-hidden border-4 border-chocolate-300">
            <Image
              src="/easter-chocolate-kit.jpg"
              alt="Mockup do Kit Digital de Receitas de Páscoa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
