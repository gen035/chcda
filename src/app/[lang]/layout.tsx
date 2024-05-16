import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Locale, i18n } from '../../../i18n-config';

import '../../../styles/index.scss';

export const metadata: Metadata = {
  title: 'Genevieve Perron Migneron - Portfolio',
  description: 'Senior Manager - Web Development',
  openGraph: {
    type: 'website',
    url: 'https://www.gen-migneron.com',
    images: [{'url':'https://www.gen-migneron.com/og.jpg'}],
    siteName: 'Portfolio'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
