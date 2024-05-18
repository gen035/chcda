import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { getDictionary } from '@/lib/dictionary';
import { fetchData } from '@/api/fetchContentfulData';

import { GET_SETTINGS } from '@/api/queries/settings';
import { GET_FOOTER } from '@/api/queries/footer';
import { GET_HEADER } from '@/api/queries/header';

import { mappedFooterData } from '@/api/mapping/footer';
import { mappedHeaderData } from '@/api/mapping/header';
import { mappedSettingsData } from '@/api/mapping/settings';

import Footer from '@/components/footer';
import Header from '@/components/header';
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
  };

  const footerVariables = {
    preview,
    id: "1ACHOxB5btutff7Hq34R25",
    locale: `${params.lang}-CA`
  };

  const headerVariables = {
    preview,
    id: "4EbJ1SccXAaI1AQstM6duj",
    locale: `${params.lang}-CA`
  }

  const settings = await fetchData(GET_SETTINGS, settingsVariables);
  const footer = await fetchData(GET_FOOTER, footerVariables);
  const header = await fetchData(GET_HEADER, headerVariables);

  const { footerText } = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body>
        <Header data={mappedHeaderData(header)}/>
        {children}
        <Footer data={mappedFooterData(footer)} footerText={footerText} settings={mappedSettingsData(settings)} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
