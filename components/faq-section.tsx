'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Como vou receber o kit digital?',
      answer: 'Você receberá um email imediatamente após a compra com um link de acesso ao portal. Ali você pode baixar todos os PDFs das receitas, acessar os vídeos e todos os bônus. É super rápido!'
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'Não há prazo! Você recebe TUDO na hora. Assim que confirmarmos o pagamento, você já pode começar a baixar o kit completo. Nada de esperar semanas.'
    },
    {
      question: 'E se não gostar do kit? Tem reembolso?',
      answer: 'Sim! Oferecemos garantia 100% de 7 dias. Se não gostar, é só enviar um email que devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia. Confiamos no nosso produto!'
    },
    {
      question: 'Posso acessar em qualquer dispositivo?',
      answer: 'Claro! O kit funciona em computador, tablet e smartphone. Você pode acessar seus PDFs e vídeos em qualquer lugar, a qualquer hora. Tudo está na nuvem e sincronizado.'
    },
    {
      question: 'Os vídeos têm legenda?',
      answer: 'Sim, todos os vídeos têm legenda em português. Além disso, cada vídeo tem um PDF guia com os ingredientes, modo de fazer, e dicas da Vovó para garantir o sucesso.'
    },
    {
      question: 'Posso usar as receitas para vender?',
      answer: 'Sim! Muitos dos nossos clientes estão usando as receitas para montar seus negócios de sobremesas. O kit inclui tudo que você precisa para começar, inclusive embalagens sugeridas.'
    },
    {
      question: 'Tem acesso à Vovó Teresinha diretamente?',
      answer: 'Você terá acesso a um grupo exclusivo de clientes onde a Vovó fica disponível para tirar dúvidas, compartilhar dicas extras e ajudar você a ter sucesso com as receitas.'
    },
    {
      question: 'O acesso é vitalício ou por período?',
      answer: 'Vitalício! Uma única compra, acesso para sempre. Sem renovação, sem mensalidade, sem surpresas. Você compra uma vez e fica com o kit para a vida toda.'
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-emerald-50 via-teal-50 to-cyan-50 py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl sm:text-6xl font-serif font-black text-emerald-900 text-balance">
            ❓ Perguntas Frequentes
          </h2>
          <p className="text-xl text-emerald-800 font-medium">
            Tudo que você precisa saber sobre o kit completo
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl overflow-hidden transition-all duration-300 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-emerald-50/50 transition-colors duration-200"
              >
                <h3 className="text-left font-black text-emerald-900 pr-4 text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-emerald-600 font-black transition-transform duration-300 group-hover:text-emerald-800 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t-2 border-emerald-200 bg-emerald-50/50">
                  <p className="text-emerald-800 leading-relaxed text-lg font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-cyan-400/40 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 rounded-3xl p-12 text-center shadow-2xl border-2 border-emerald-400/50 backdrop-blur-sm">
            <p className="text-3xl mb-6">💬</p>

            <p className="text-white font-bold mb-4 text-lg">
              Ainda tem dúvida?
            </p>

            <p className="text-emerald-100 mb-8 text-xl font-medium">
              Entre em contato direto com a Vovó Teresinha por email ou WhatsApp
            </p>

            <a
              href="https://wa.me/5511999999999"
              className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-black py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              💚 Fale com a Vovó no WhatsApp
            </a>

            <p className="text-emerald-200 text-sm mt-6 italic">
              Resposta rápida, atendimento com carinho
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
