import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import Cookies from 'js-cookie';

import { fetchData } from '@/api/fetchContentfulData';
import { GET_SETTINGS } from '@/api/queries/settings';
import { GET_FOOTER } from '@/api/queries/footer';
import { GET_HEADER } from '@/api/queries/header';

import { mappedFooterData } from '@/api/mapping/footer';
import { mappedHeaderData } from '@/api/mapping/header';
import { mappedSettingsData } from '@/api/mapping/settings';

import CookieBanner from '@/components/CookieBanner';
import CookieModal from '@/components/CookieModal';
import Footer from '@/components/footer';
import GoogleAnalyticsWrapper from '@/components/GoogleAnalyticsWrapper';
import Header from '@/components/header';

import '../../../styles/index.scss';


export function generateStaticParams() {
  return ['fr','en'].map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  unstable_setRequestLocale(params.lang);
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
        <GoogleAnalyticsWrapper />
        <NextIntlClientProvider messages={messages}>
          <Header data={mappedHeaderData(header)} locale={params.lang} />
            {children}
            <CookieBanner locale={params.lang} />
            <CookieModal />
          <Footer data={mappedFooterData(footer)} settings={mappedSettingsData(settings)} locale={params.lang} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
