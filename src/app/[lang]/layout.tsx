import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { getDictionary } from '@/lib/dictionnary';
import { fetchData } from '@/api/fetchContentfulData';

import { GET_SETTINGS } from '@/api/queries/settings';
import { GET_FOOTER } from '@/api/queries/footer';
import { GET_HEADER } from '@/api/queries/header';

import { mappedFooterData } from '@/api/mapping/footer';
import { mappedHeaderData } from '@/api/mapping/header';
import { mappedSettingsData } from '@/api/mapping/settings';

import Footer from '@/components/footer';
import Header from '@/components/header';

import { i18n } from '../../../i18n-config';
import '../../../styles/index.scss';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const messages = await getDictionary(params.lang);
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

  return (
    <html lang={params.lang}>
      <head></head>
      <body>
        <Header data={mappedHeaderData(header)} locale={params.lang} />
        {children}
        <Footer data={mappedFooterData(footer)} settings={mappedSettingsData(settings)} locale={params.lang} messages={messages.footerText}/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
