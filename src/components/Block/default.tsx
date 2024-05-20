import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Default: FC<BlockInterface> = ({ data }) => {
  const getClasses = () => {
    switch(data?.type) {
      case 'full':
        return 'w-full max-w-screen-lg flex-row-reverse'
      default:
        return ''
    }
  };

  return (
    <section className={`flex mx-auto my-0 px-4 py-0 ${getClasses()}`}>
      <div className="content">
        {data?.title && <h1>{data.title}</h1>}
        {data?.subtitle && <h2>{data.subtitle}</h2>}
        {data?.description && <div className="rich"><RichText richTextDocument={data.description} /></div>}
      </div>
      <div className="media">
        {data?.image?.url && <img className="mx-auto mb-8" src={data.image.url} />}
      </div>
    </section>
  );
};

export default Default;
