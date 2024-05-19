import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Full: FC<BlockInterface> = ({ data }) => {
  return (
    <section className="section-full max-w-screen-lg mx-auto mt-16 mb-8">
      {data?.title && <h1 className="text-center mb-8">{data.title}</h1>}
      {data?.subtitle && <h1 className="text-center mb-8">{data.subtitle}</h1>}
      {data?.image?.url && <img className="mx-auto mb-8" src={data.image.url} />}
      {data?.description && <RichText richTextDocument={data.description} />}
    </section>
  );
};

export default Full;
