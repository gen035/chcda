import Head from 'next/head'

import { fetchData } from '@/api/fetchContentfulData';
import { mappedPageData } from '@/api/mapping/page';
import { mappedMetaData } from '@/api/mapping/metadata';
import { GET_METADATA } from '@/api/queries/metadata';
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

export async function generateMetadata({ params }: PageProps) {
  const preview = process.env.NEXT_NODE_ENV === 'development';
  const slug = params?.slug?.join('/');
  const locale = params.lang;
  
  const pageVariables = {
    preview,
    slug: '/',
    locale: `${locale}-CA`
  }

  let data = await fetchData(GET_METADATA, pageVariables);
  data = mappedMetaData(data);
  console.log(data);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      type: 'article',
      url: `https://yourwebsite.com/${slug}`,
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.image?.url,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    }
  }
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
    <div data-name={slugify(page.name ?? '')} className="translate-y-[-80px]">
      {page?.sections?.length > 0 && page?.sections.map((item: object, index: Number) => (
          <Block key={index} data={item} />
        ))
      }
    </div>
  );
};

export default Page;
