import Head from 'next/head'

import { fetchData } from '@/api/fetchContentfulData';
import { mappedPageData } from '@/api/mapping/page';
import { GET_PAGE } from '@/api/queries/page';

import Block from '@/components/Block';

interface PageProps {
  params: {
    locale: string;
    lang: string[];
    slug: string;
  };
  page: {
    title: string;
    content: {
      json: string;
    };
  };
}

const Page = async ({ params }: PageProps) => {
  const preview = process.env.NEXT_NODE_ENV === 'development';
  const locale = params.lang;

   const pageVariables = {
    preview,
    slug: '/',
    locale: `${locale}-CA`
  }

  let page = await fetchData(GET_PAGE, pageVariables);
  page = mappedPageData(page);

  if (!page) {
    return <div>Page not found</div>;
  }

  const slugify = (string: string) => {
    return string
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    }
  return (
    
    <>
      <Head>
        <title>ffff</title>
        <meta name="description" content="{page.description}" />
      </Head>
      <div data-name={slugify(page.name ?? '')}>
        {page?.sections?.length > 0 && page?.sections.map((item: object, index: Number) => (
            <Block key={index} data={item} />
          ))
        }
      </div>
    </>
  );
};

export default Page;
