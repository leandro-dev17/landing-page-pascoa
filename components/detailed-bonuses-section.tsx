'use client'

export function DetailedBonusesSection() {
  const bonuses = [
    {
      number: '1',
      title: 'Tabela de Precificação Editável',
      description: 'Planilha no Google Sheets. Coloca o custo e ela calcula o preço de venda e o lucro automaticamente',
      value: 'R$ 150',
      icon: '📊',
    },
    {
      number: '2',
      title: 'Lista de Compras Completa',
      description: 'Organizada por categoria (Chocolate, Recheios, Embalagens). Você não vai esquecer de nada',
      value: 'R$ 35',
      icon: '📝',
    },
    {
      number: '3',
      title: 'Scripts de Venda para WhatsApp',
      description: '30 frases prontas para enviar em contatos e grupos. Aumenta suas vendas em 300%',
      value: 'R$ 33',
      icon: '💬',
    },
    {
      number: '4',
      title: 'Artes para Divulgação',
      description: '10 artes profissionais para status, stories e grupos. Pronta para usar',
      value: 'R$ 197',
      icon: '🎨',
    },
    {
      number: '5',
      title: 'Etiquetas para Imprimir',
      description: '3 modelos: "Feito com carinho", "Feliz Páscoa", "Doce Artesanal". Formato A4',
      value: 'R$ 93',
      icon: '🏷️',
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-violet-50 via-fuchsia-50 to-pink-50 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-serif font-black text-violet-900 mb-6 text-balance">
            🎁 5 Bônus Exclusivos
          </h2>
          <p className="text-xl text-violet-800 max-w-2xl mx-auto font-medium">
            Ferramentas profissionais prontas para você começar a lucrar já
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Bonuses Cards - 5 cards em grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {bonuses.map((bonus, idx) => {
            const colors = [
              'from-violet-500 to-purple-600',
              'from-cyan-500 to-blue-600',
              'from-emerald-500 to-teal-600',
              'from-rose-500 to-pink-600',
              'from-amber-500 to-orange-600'
            ]
            return (
              <div key={idx} className="group relative h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-300 blur-2xl -z-10 rounded-3xl" style={{backgroundImage: `linear-gradient(to bottom right, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))`}}></div>

                <div className={`relative bg-gradient-to-br ${colors[idx]} rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-3 cursor-pointer overflow-hidden group`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-white/90 text-violet-900 rounded-full flex items-center justify-center font-black text-2xl shadow-2xl">
                      {bonus.number}
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300">{bonus.icon}</div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-white mb-4 text-balance leading-tight flex-grow">
                      {bonus.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/90 mb-6 leading-relaxed">
                      {bonus.description}
                    </p>

                    {/* Value */}
                    <div className="text-3xl font-black text-white drop-shadow-lg line-through">
                      {bonus.value}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Total Value - Premium Box */}
        <div className="relative mb-8">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400/40 via-pink-400/40 to-rose-400/40 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white text-center shadow-2xl border-2 border-violet-400/50 backdrop-blur-sm">
            <p className="text-lg font-bold mb-4 text-violet-200">✨ VALOR TOTAL DOS 5 BÔNUS:</p>
            <p className="text-4xl font-black text-violet-300 mb-4">R$ 508,00</p>
            
            <div className="h-1 w-32 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto mb-6 rounded-full"></div>

            <p className="text-3xl font-black text-white mb-2">+ R$ 47 do E-book Principal</p>
            <p className="text-5xl font-black text-amber-300 mb-8 drop-shadow-lg">=  R$ 555,00 em Valor Total</p>
            
            <div className="h-1 w-40 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-3xl font-black text-white mb-2">Você paga APENAS:</p>
            <p className="text-6xl font-black text-emerald-300 drop-shadow-lg">R$ 37,90</p>
            
            <p className="text-lg text-amber-200 italic mt-8">
              💡 "Uma só venda cobre 100% do seu investimento!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
