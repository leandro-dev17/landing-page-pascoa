import { Button } from '@/components/ui/button'

export function CTAFinalSection() {
  return (
    <section className="w-full bg-gradient-to-r from-chocolate-900 via-chocolate-800 to-caramel-700 py-20 sm:py-28 lg:py-32 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white text-balance">
                Garantia de 7 Dias 100%
              </h2>
              <p className="text-lg text-cream-100">
                Se você não ficar 100% satisfeito com o kit, basta enviar um email que devolvemos todo o dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>

            {/* Guarantee details */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-bold text-white">Reembolso Total</p>
                  <p className="text-sm text-cream-100">Dinheiro de volta se não gostar</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-bold text-white">Sem Perguntas</p>
                  <p className="text-sm text-cream-100">Não pedimos explicações</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-bold text-white">Suporte Total</p>
                  <p className="text-sm text-cream-100">Vovó disponível para ajudar</p>
                </div>
              </div>
            </div>

            {/* Final price */}
            <div className="bg-white/20 rounded-xl p-6 mt-6 border border-white/30">
              <p className="text-cream-100 mb-2">Preço normal: <span className="line-through">R$ 685,00</span></p>
              <p className="text-5xl font-bold text-gold-300 mb-2">R$ 37,90</p>
              <p className="text-sm text-cream-100">Uma única compra, acesso vitalício</p>
            </div>
          </div>

          {/* Right - CTA Box */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-chocolate-900 font-semibold mb-1">Está pronto para começar?</p>
                <p className="text-sm text-chocolate-700">Clique no botão abaixo e tenha acesso AGORA</p>
              </div>

              <Button size="lg" className="w-full bg-chocolate-900 hover:bg-chocolate-800 text-white font-bold py-6 text-lg rounded-xl h-auto">
                Quero Meu Kit Agora - R$ 37,90
              </Button>

              <div className="space-y-3 text-center text-sm">
                <p className="text-chocolate-700 font-semibold">
                  ✓ Acesso imediato
                </p>
                <p className="text-chocolate-700 font-semibold">
                  ✓ 25+ Receitas + Vídeos
                </p>
                <p className="text-chocolate-700 font-semibold">
                  ✓ R$ 358 em bônus grátis
                </p>
                <p className="text-chocolate-700 font-semibold">
                  ✓ Garantia 7 dias
                </p>
              </div>

              {/* Trust badges */}
              <div className="pt-4 border-t border-cream-200 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">🔒</span>
                  <span className="text-xs text-chocolate-700">Pagamento seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">⭐</span>
                  <span className="text-xs text-chocolate-700">500+ avaliações 4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
