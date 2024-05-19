import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Hero: FC<BlockInterface> = ({ data }) => {
  const divStyle = {
    backgroundImage: `url('${data?.image?.url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className={`block block-hero block-${data?.type} ${data?.type === 'hero' ? 'min-h-96' : 'min-h-64'}`} style={divStyle}>
      <div className="block-content">
        {data?.title && <h1>{data?.title}</h1>}
        {data?.subtitle && <h2>{data?.subtitle}</h2>}
        {data?.description && <RichText richTextDocument={data.description} />}
      </div>
    </div>
  );
};

export default Hero;
