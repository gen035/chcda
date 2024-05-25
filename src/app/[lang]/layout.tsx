import type { Metadata } from 'next'
import Head from 'next/head';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

import '../../../styles/index.scss';

export const fetchCache = 'force-no-store';

export function generateStaticParams() {
  return ['fr','en'].map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const messages = await getMessages();
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
        <NextIntlClientProvider messages={messages}>
          <Header data={mappedHeaderData(header)} locale={params.lang} />
          {children}
          <Footer data={mappedFooterData(footer)} settings={mappedSettingsData(settings)} />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
