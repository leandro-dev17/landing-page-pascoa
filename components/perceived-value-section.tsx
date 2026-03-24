'use client'

import Image from 'next/image'

export function PerceivedValueSection() {
  const bonuses = [
    { label: 'E-book Principal', value: 'R$ 47', icon: '📚', color: 'from-amber-400 to-orange-500' },
    { label: 'Tabela de Precificação Editável', value: 'R$ 150', icon: '📊', color: 'from-blue-400 to-blue-600' },
    { label: 'Lista de Compras Completa', value: 'R$ 35', icon: '✓', color: 'from-green-400 to-green-600' },
    { label: 'Scripts de Venda para WhatsApp', value: 'R$ 33', icon: '💬', color: 'from-teal-400 to-teal-600' },
    { label: 'Artes de Divulgação (10 artes)', value: 'R$ 197', icon: '🎨', color: 'from-pink-400 to-pink-600' },
    { label: 'Etiquetas para Imprimir', value: 'R$ 93', icon: '🏷️', color: 'from-purple-400 to-purple-600' },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-serif font-black text-amber-900 mb-6 text-balance">
            Valor Total Percebido
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto font-medium">
            Veja tudo que você recebe neste kit transformador
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Bonuses Grid - 6 cards coloridos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="group relative">
              <div className={`bg-gradient-to-br ${bonus.color} rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-6xl mb-4">{bonus.icon}</div>
                  
                  {/* Label */}
                  <p className="text-white font-bold text-lg mb-4 text-balance flex-grow">
                    {bonus.label}
                  </p>
                  
                  {/* Value */}
                  <p className="text-3xl font-black text-white drop-shadow-lg">
                    {bonus.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Summary - Premium Box */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 via-orange-400/30 to-red-400/30 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 rounded-3xl p-12 text-white text-center shadow-2xl border-2 border-amber-400/50 backdrop-blur-sm">
            <p className="text-lg font-semibold mb-6 text-amber-100">📊 VALOR TOTAL PERCEBIDO:</p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl line-through opacity-70 text-amber-200">R$ 685,00</span>
              <span className="text-7xl font-black text-amber-300 drop-shadow-lg">R$ 37,90</span>
            </div>
            
            <div className="h-1 w-32 bg-gradient-to-r from-amber-300 to-red-300 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-2xl font-bold text-amber-100 mb-4">
              🔥 94% de desconto para os primeiros 100 clientes
            </p>
            
            <p className="text-lg text-amber-200 italic">
              "Isso é investimento, não é gasto. Você vai ganhar isso de volta na primeira venda!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
