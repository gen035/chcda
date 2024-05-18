import Head from 'next/head'

import { fetchData } from '@/api/fetchContentfulData';
import { mappedPageData } from '@/api/mapping/page';
import { GET_PAGE } from '@/api/queries/page';

interface PageProps {
  params: {
    locale: string;
    lang: string[];
  };
  page: {
    title: string;
    content: {
      json: string;
    };
  };
}

const fetchPageData = async (slug: string, locale: string) => {
  const preview = process.env.NEXT_NODE_ENV === 'development';

  const pageVariables = {
    preview,
    slug,
    locale: `${locale}-CA`
  }
  console.log(pageVariables)
  
  const page = await fetchData(GET_PAGE, pageVariables);
  console.log(page)
  return mappedPageData(page) || null;
};

const Page = async ({ params }: PageProps) => {
  console.log(params)
  const slug = params.slug.join('/');
  const locale = params.lang;
  const page = await fetchPageData(slug, locale);

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <Head>
        <title>ffff</title>
        <meta name="description" content="{page.description}" />
      </Head>
      <div>
      <h1>sup</h1>
    </div>
    </>
  );
};

export default Page;
