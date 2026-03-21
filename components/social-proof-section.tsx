export function SocialProofSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-chocolate-900 text-balance">
            Confira o Que Nossos Clientes Falam
          </h2>
          <p className="text-lg text-chocolate-700">
            Mais de 500 famílias já estão fazendo as receitas de Páscoa da Vovó
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <p className="text-5xl font-playfair font-bold text-chocolate-900 mb-2">
              500+
            </p>
            <p className="text-chocolate-700">
              Clientes Satisfeitos
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-playfair font-bold text-chocolate-900 mb-2">
              4.9 ⭐
            </p>
            <p className="text-chocolate-700">
              Avaliação Média
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-playfair font-bold text-chocolate-900 mb-2">
              50
            </p>
            <p className="text-chocolate-700">
              Anos de Tradição
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-chocolate-200 flex items-center justify-center font-bold text-chocolate-900">
                JM
              </div>
              <div>
                <p className="font-bold text-chocolate-900">Juliana Mendes</p>
                <p className="text-sm text-chocolate-700">São Paulo, SP</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>
            <p className="text-chocolate-700 italic">
              "Meus filhos não acreditavam que eu tinha feito esses bombons! As receitas são tão fáceis e o resultado fica profissional. Super recomendo!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-caramel-200 flex items-center justify-center font-bold text-chocolate-900">
                CR
              </div>
              <div>
                <p className="font-bold text-chocolate-900">Carlos Rodrigues</p>
                <p className="text-sm text-chocolate-700">Rio de Janeiro, RJ</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>
            <p className="text-chocolate-700 italic">
              "Comprei para presentear minha mãe na Páscoa. Ela amou as receitas e já está ganhando dinheiro vendendo as sobremesas dos vizinhos!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold-200 flex items-center justify-center font-bold text-chocolate-900">
                FF
              </div>
              <div>
                <p className="font-bold text-chocolate-900">Fernanda Ferreira</p>
                <p className="text-sm text-chocolate-700">Belo Horizonte, MG</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>
            <p className="text-chocolate-700 italic">
              "O acesso aos vídeos foi sensacional. Vovó explica tudo com tanto carinho que parece que ela está na minha cozinha comigo!"
            </p>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-16 bg-gradient-easter rounded-2xl p-8 border-2 border-chocolate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-chocolate-900 mb-2">✓ Garantia de 7 Dias</p>
              <p className="text-sm text-chocolate-700">Ou seu dinheiro de volta</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-chocolate-900 mb-2">✓ Acesso Imediato</p>
              <p className="text-sm text-chocolate-700">Receba tudo por email na hora</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-chocolate-900 mb-2">✓ Suporte da Vovó</p>
              <p className="text-sm text-chocolate-700">Tire dúvidas diretamente com ela</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
