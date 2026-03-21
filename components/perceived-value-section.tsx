'use client'

import Image from 'next/image'

export function PerceivedValueSection() {
  const bonuses = [
    { label: 'E-book Principal', value: 'R$ 47' },
    { label: 'Tabela de Precificação Editável', value: 'R$ 150' },
    { label: 'Lista de Compras Completa', value: 'R$ 35' },
    { label: 'Scripts de Venda para WhatsApp', value: 'R$ 33' },
    { label: 'Artes de Divulgação (10 artes)', value: 'R$ 197' },
    { label: 'Etiquetas para Imprimir', value: 'R$ 93' },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-cream-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            O Que Você Recebe
          </h2>
          <p className="text-xl text-chocolate-700 max-w-2xl mx-auto">
            Um kit completo com tudo que você precisa para começar a lucrar com receitas de Páscoa
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <p className="text-chocolate-700 font-semibold text-sm mb-3 text-balance">
                {bonus.label}
              </p>
              <p className="text-3xl font-bold text-gold-500">
                {bonus.value}
              </p>
            </div>
          ))}
        </div>

        {/* Value Summary */}
        <div className="bg-gradient-to-r from-chocolate-900 to-chocolate-800 rounded-3xl p-8 text-white text-center shadow-2xl">
          <p className="text-lg mb-4">Valor Total Percebido:</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm line-through opacity-70">R$ 685,00</span>
            <span className="text-5xl font-black text-gold-300">R$ 37,90</span>
          </div>
          <p className="text-lg font-semibold">
            94% de desconto para os primeiros 100 clientes
          </p>
        </div>
      </div>
    </section>
  )
}
