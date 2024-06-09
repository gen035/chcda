import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { BlockInterface } from '@/interfaces/block';

const Default: FC<BlockInterface> = ({ data }) => {
  const getClasses = () => {
    switch(data?.type) {
      case 'full':
        return 'w-full max-w-screen-md flex-col-reverse'
      default:
        return ''
    }
  };

  return (
    <section data-id={data?.id} className={`flex mx-auto my-0 px-4 py-0 ${getClasses()}`}>
      <div className="content ">
        {data?.title && <h1 className="text-center text-primary mt-4 mb-4 text-gradient">{data.title}</h1>}
        {data?.subtitle && <h2>{data.subtitle}</h2>}
        {data?.description && <ReactMarkdown>{data.description}</ReactMarkdown>}
      </div>
      <div className="media">
        {data?.image?.url && <img className="mx-auto mb-8" src={data.image.url} />}
      </div>
    </section>
  );
};

export default Default;
