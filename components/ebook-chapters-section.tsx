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
    <section className="w-full bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-serif font-black text-slate-900 mb-6 text-balance">
            Estrutura Completa do E-book
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            3 capítulos estratégicos que te levam do iniciante ao empreendedor de sucesso
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-20">
          {chapters.map((chapter, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Number Badge */}
                <div className={`inline-block bg-gradient-to-r ${chapter.color} text-white rounded-full px-8 py-3 mb-8 font-bold text-xl shadow-xl`}>
                  Capítulo {chapter.number}
                </div>
                
                <h3 className="text-4xl sm:text-5xl font-serif font-black text-slate-900 mb-6 text-balance">
                  {chapter.title}
                </h3>
                
                <p className="text-xl text-slate-700 mb-12 leading-relaxed font-medium">
                  {chapter.description}
                </p>

                {/* Topics with enhanced styling */}
                <ul className="space-y-4">
                  {chapter.topics.map((topic, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className={`text-2xl font-black flex-shrink-0 group-hover:scale-125 transition-transform`}>
                        ✓
                      </span>
                      <span className="text-lg text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image with enhanced styling */}
              <div className={`relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
