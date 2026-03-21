'use client'

import Image from 'next/image'

export function EbookChaptersSection() {
  const chapters = [
    {
      number: '1',
      title: 'Técnicas Básicas do Chocolate',
      description: 'Aprenda como derreter, temperizar e trabalhar chocolate como profissional',
      topics: [
        'Como Derreter Chocolate',
        'Temperagem Simples em Casa',
        'Fazer a Casca do Ovo',
        'Rechear Ovos Profissionalmente',
        'Armazenar Ovos de Páscoa',
      ],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metade%20ovo%20recheado%20gostoso-fCPzIQUkAtmqbS84DdLwtzHf2Dadz9.jpg',
      color: 'from-chocolate-600 to-chocolate-800',
    },
    {
      number: '2',
      title: 'Receitas Que Encantam',
      description: '25+ receitas profissionais divididas em 4 categorias',
      topics: [
        '5 Ovos de Colher Premium',
        'Lembrancinhas e Presentes',
        'Produtos Premium e Especiais',
        'Produtos Kids',
        'Passo a passo de cada receita',
      ],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20ovos%20aberto%20kit%20kat-Fi00Q59mO0TKeMYyXv94TQDV84MYdK.jpg',
      color: 'from-gold-500 to-caramel-600',
    },
    {
      number: '3',
      title: 'Como Ganhar Renda Extra',
      description: 'Transforme suas receitas em um negócio lucrativo',
      topics: [
        'Embalagens Profissionais',
        'Armazenamento Correto',
        'Cálculo de Lucro Preciso',
        'Estratégias de Venda Rápida',
        'Dicas para Fidelizar Clientes',
      ],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20ovos%20de%20colher%20recheados%20brigadeiro%20e%20morango.png-oxeoqS5vQpNb7PgIIkyE2q7axmTWnt.jpeg',
      color: 'from-pink-500 to-rose-600',
    },
  ]

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 mb-4">
            Estrutura do E-book
          </h2>
          <p className="text-xl text-chocolate-700 max-w-2xl mx-auto">
            3 capítulos que te levam do iniciante ao profissional em vendas de Páscoa
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-16">
          {chapters.map((chapter, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div className={`inline-block bg-gradient-to-r ${chapter.color} text-white rounded-full px-6 py-2 mb-6 font-bold text-lg`}>
                  Capítulo {chapter.number}
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate-900 mb-4">
                  {chapter.title}
                </h3>
                
                <p className="text-lg text-chocolate-700 mb-8">
                  {chapter.description}
                </p>

                <ul className="space-y-3">
                  {chapter.topics.map((topic, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-gold-500 font-bold text-xl flex-shrink-0">✓</span>
                      <span className="text-chocolate-700 font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
