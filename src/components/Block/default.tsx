import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Default: FC<BlockInterface> = ({ data }) => {
  return (
    <section className={`block block-${data.type}`}>
      <div className="block-content">
        {data?.title && <h1>{data.title}</h1>}
        {data?.subtitle && <h2>{data.subtitle}</h2>}
        {data?.description && <div className="block-content-rich"><RichText richTextDocument={data.description} /></div>}
      </div>
      <div className="block-media">
        {data?.image?.url && <img className="mx-auto mb-8" src={data.image.url} />}
      </div>
    </section>
  );
};

export default Default;