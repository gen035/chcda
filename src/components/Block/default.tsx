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
    <section data-id={data?.id} className={`flex max-w-screen-md mx-auto my-8 px-4 py-0 ${getClasses()}`}>
      <div className="content text-center">
        {data?.title && <h2 className="text-center text-primary mt-4 mb-4 text-gradient">{data.title}</h2>}
        {data?.subtitle && <h3 className="text-center text-primary mt-4 mb-4 text-gradient-grey">{data.subtitle}</h3>}
        {data?.description && <ReactMarkdown>{data.description}</ReactMarkdown>}
        {data?.button && <a href={data.button.url} target={data.button.target} className='btn btn-primary btn-gradient btn-gradient order-4 w-fit mt-2'>{data.button.text}</a>}
      </div>
      <div className="media">
        {data?.image?.url && <img className="mx-auto mb-8" src={data.image.url} />}
      </div>
    </section>
  );
};

export default Default;
