import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const lato = Lato({ 
  subsets: ["latin"],
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Kit de Receitas de Páscoa da Vovó Teresinha',
  description: 'Descubra as receitas de páscoa mais deliciosas da Vovó Teresinha. Um kit completo com 25+ receitas tradicionais.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
