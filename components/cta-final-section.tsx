import { Button } from '@/components/ui/button'

export function CTAFinalSection() {
  return (
    <section className="w-full bg-gradient-to-b from-rose-50 via-red-50 to-orange-50 py-24 sm:py-32 lg:py-40 text-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-serif font-black text-rose-900 text-balance">
                ✅ Garantia de 7 Dias 100%
              </h2>
              <p className="text-xl text-rose-800 leading-relaxed font-medium">
                Se você não ficar 100% satisfeito com o kit, basta enviar um email que devolvemos todo o dinheiro. Sem perguntas, sem burocracia. Nós confiamos no nosso produto!
              </p>
            </div>

            {/* Guarantee details - Enhanced */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-green-300 hover:border-green-500 hover:shadow-lg transition-all">
                <div className="text-4xl flex-shrink-0 font-black text-green-600">✓</div>
                <div>
                  <p className="font-black text-rose-900 text-lg">Reembolso Total</p>
                  <p className="text-sm text-rose-800 font-medium">Dinheiro de volta 100% se não gostar</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-blue-300 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="text-4xl flex-shrink-0 font-black text-blue-600">✓</div>
                <div>
                  <p className="font-black text-rose-900 text-lg">Sem Perguntas</p>
                  <p className="text-sm text-rose-800 font-medium">Não pedimos explicações, é de verdade</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-amber-300 hover:border-amber-500 hover:shadow-lg transition-all">
                <div className="text-4xl flex-shrink-0 font-black text-amber-600">✓</div>
                <div>
                  <p className="font-black text-rose-900 text-lg">Suporte Total</p>
                  <p className="text-sm text-rose-800 font-medium">Vovó disponível 24/7 para ajudar</p>
                </div>
              </div>
            </div>

            {/* Final price - Enhanced */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300/30 to-orange-300/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-8 border-3 border-rose-200 shadow-xl">
                <p className="text-rose-800 mb-3 font-semibold">Preço normal:</p>
                <p className="text-2xl line-through text-rose-600 font-bold mb-4">R$ 685,00</p>
                <div className="h-1 w-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6"></div>
                <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600 mb-4">R$ 37,90</p>
                <p className="text-lg text-rose-900 font-bold">Uma única compra, acesso vitalício</p>
              </div>
            </div>
          </div>

          {/* Right - CTA Box - Premium */}
          <div className="relative group h-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-red-400/40 to-rose-400/40 rounded-4xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-gradient-to-br from-white via-rose-50/50 to-orange-50/50 rounded-4xl p-12 shadow-2xl border-3 border-white/80 backdrop-blur-sm h-full flex flex-col justify-between">
              <div>
                <div className="text-center mb-8">
                  <p className="text-5xl mb-4">🎁</p>
                  <p className="text-rose-900 font-black text-2xl mb-2">Está Pronto para Começar?</p>
                  <p className="text-lg text-rose-800 font-semibold">Clique no botão abaixo e tenha acesso AGORA</p>
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white font-black py-8 text-xl rounded-3xl h-auto shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-8">
                  🚀 Quero Meu Kit Agora - R$ 37,90
                </Button>

                <div className="space-y-3 text-center mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200">
                  <p className="text-green-700 font-black text-lg">
                    ✓ Acesso Imediato
                  </p>
                  <p className="text-green-700 font-black text-lg">
                    ✓ 25+ Receitas + Vídeos
                  </p>
                  <p className="text-green-700 font-black text-lg">
                    ✓ R$ 558 em Bônus Grátis
                  </p>
                  <p className="text-green-700 font-black text-lg">
                    ✓ Garantia 7 Dias
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-6 border-t-3 border-rose-200 space-y-3">
                <div className="flex items-center justify-center gap-2 text-rose-800">
                  <span className="text-2xl">🔒</span>
                  <span className="font-bold text-lg">Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-700">
                  <span className="text-2xl">⭐</span>
                  <span className="font-bold text-lg">500+ Avaliações 4.9★</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-700">
                  <span className="text-2xl">💯</span>
                  <span className="font-bold text-lg">Satisfação Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-black text-rose-900 mb-4">
            ⏰ Aproveite a oferta especial de hoje
          </p>
          <p className="text-lg text-rose-800 font-bold">
            São apenas 100 vagas com este preço especial - Você está entre elas?
          </p>
        </div>
      </div>
    </section>
  )
}
