import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { fetchData } from '../../api/fetchContentfulData';
import { GET_SETTINGS } from '@/api/queries/settings';
import { GET_FOOTER } from '@/api/queries/footer';
import { mappedFooterData } from '@/api/mapping/footer';

import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const preview = process.env.NEXT_NODE_ENV === 'development';

  const settingsVariables = {
    preview,
    id: "4EEq37r3UhjLkLhaY2cpta"
  }

  const footerVariables = {
    preview,
    id: "1ACHOxB5btutff7Hq34R25",
    locale: `${params.lang}-CA`
  }

  const settings = await fetchData(GET_SETTINGS, settingsVariables);
  const footerData = await fetchData(GET_FOOTER, footerVariables);
  console.log(mappedFooterData(footerData));
  
  return (
    <html lang={params.lang}>
      <body>
        <Navigation />
        {children}
        <Footer data={mappedFooterData(footerData)} settings={settings} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
