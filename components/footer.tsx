export function Footer() {
  return (
    <footer className="w-full bg-chocolate-900 text-cream-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-chocolate-700">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">
              Vovó Teresinha
            </h3>
            <p className="text-sm text-cream-100">
              50 anos de tradição culinária e amor por fazer receitas deliciosas
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Perguntas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contato@vovoTeresinha.com" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="text-cream-100 hover:text-gold-300 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-gold-300 transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-cream-100">
            © 2024 Vovó Teresinha. Todos os direitos reservados.
          </p>
          <p className="text-cream-200 text-xs">
            Este é um produto digital. Você receberá acesso via email após a compra.
          </p>
        </div>
      </div>
    </footer>
  )
}
