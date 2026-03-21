import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-caramel-200 to-gold-200 flex items-center justify-center order-2 lg:order-1">
            <Image
              src="/easter-recipes-display.jpg"
              alt="Receitas de Páscoa da Vovó Teresinha"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-chocolate-900 text-balance">
                A História da Vovó Teresinha
              </h2>
              <p className="text-lg text-chocolate-700 leading-relaxed">
                Maria Teresinha da Silva, conhecida carinhosamente como Vovó Teresinha, iniciou sua jornada culinária aos 18 anos, quando começou a preparar receitas especiais para a família durante as festas de Páscoa.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-chocolate-900">50+ Anos de Experiência</p>
                  <p className="text-chocolate-700 text-sm">Cinco décadas desenvolvendo e aperfeiçoando as melhores receitas</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <p className="font-bold text-chocolate-900">Tradição Familiar</p>
                  <p className="text-chocolate-700 text-sm">Repassando conhecimento para filhos, netos e milhares de clientes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="font-bold text-chocolate-900">Método Comprovado</p>
                  <p className="text-chocolate-700 text-sm">Técnicas que funcionam, testadas por gerações</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-6 bg-cream-50 rounded-xl border-l-4 border-chocolate-900">
              <p className="text-chocolate-900 italic mb-4">
                "Minhas receitas de Páscoa trazem alegria para as famílias há mais de 50 anos. Agora, com esse kit digital, posso compartilhar a mesma magia que as minhas avós ensinaram para mim."
              </p>
              <p className="font-bold text-chocolate-900">— Vovó Teresinha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
