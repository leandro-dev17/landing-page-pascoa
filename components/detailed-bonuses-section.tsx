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
    <section className="w-full bg-gradient-to-b from-cream-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            5 Bônus Extras Você Ganha Grátis
          </h2>
          <p className="text-xl text-chocolate-700">
            Ferramentas prontas para você começar a vender já
          </p>
        </div>

        {/* Bonuses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="group relative">
              <div className="bg-white rounded-3xl p-6 h-full border-2 border-chocolate-200 hover:border-gold-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                  {bonus.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{bonus.icon}</div>

                {/* Content */}
                <h3 className="text-lg font-bold text-chocolate-900 mb-3 text-balance">
                  {bonus.title}
                </h3>
                <p className="text-sm text-chocolate-700 mb-4 leading-relaxed">
                  {bonus.description}
                </p>

                {/* Value */}
                <div className="text-2xl font-bold text-gold-500 line-through text-right">
                  {bonus.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="bg-gradient-to-r from-chocolate-900 to-chocolate-800 rounded-3xl p-8 text-white text-center shadow-2xl">
          <p className="text-lg mb-2">Valor Total dos Bônus: R$ 608,00</p>
          <p className="text-4xl font-black text-gold-300 mb-2">+ R$ 47 do E-book Principal</p>
          <p className="text-2xl font-bold text-gold-200">= R$ 655,00 em Bônus</p>
          <p className="text-lg mt-4 text-gold-100">Você paga APENAS R$ 37,90 pelo kit completo</p>
        </div>
      </div>
    </section>
  )
}
