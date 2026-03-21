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
    <section className="w-full bg-cream-50 py-20 sm:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-900 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-chocolate-700">
            Tudo que você precisa saber sobre o kit
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-cream-200 hover:border-chocolate-300 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-cream-50 transition-colors duration-200"
              >
                <h3 className="text-left font-bold text-chocolate-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-chocolate-700 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t border-cream-200 bg-cream-50">
                  <p className="text-chocolate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 bg-gradient-easter rounded-2xl p-8 text-center">
          <p className="text-chocolate-900 font-semibold mb-3">
            Ainda tem dúvida?
          </p>
          <p className="text-chocolate-700 mb-6">
            Entre em contato direto com a Vovó Teresinha por email ou WhatsApp
          </p>
          <a
            href="https://wa.me/5511999999999"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            Fale com a Vovó no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
