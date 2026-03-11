import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ScrollDepthTracker from '@/components/ScrollDepthTracker'

const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-golos',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Подготовка к ЕГЭ и ОГЭ онлайн | MAXIMUM Education — гарантия результата',
  description: 'Школа, которая доводит до результата. Гарантированно. 93% учеников проходят курсы до конца. 80+ баллов ЕГЭ — каждый 3-й ученик. 450 000 семей доверили нам подготовку к экзаменам.',
  metadataBase: new URL('https://maximumtest.ru'),
  alternates: { canonical: 'https://maximumtest.ru/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'MAXIMUM Education — школа, которая доводит до результата',
    description: '93% учеников проходят курсы до конца. Гарантия результата прописана в договоре.',
    url: 'https://maximumtest.ru/',
    siteName: 'MAXIMUM Education',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MAXIMUM Education' }],
    locale: 'ru_RU',
    type: 'website',
  },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={golos.variable}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <ScrollDepthTracker />
      </body>
    </html>
  )
}
