import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Hero: FC<BlockInterface> = ({ data }) => {
  const divStyle = {
    backgroundImage: `url('${data?.image?.url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const getClasses = () => {
    switch(data?.type) {
      case 'hero':
        return 'w-full min-h-96'
      case 'hero--shallow':
        return 'min-h-64'
      default:
        return ''
    }
  };

  return (
    <div className={`flex mx-auto mb-8 px-4 py-0 justify-center items-center ${getClasses()}`} style={divStyle}>
      <div className={`content ${data?.type === 'hero' ? 'w-full md:w-3/4 lg:w-1/2' : ''}`}>
        {data?.title && <h1>{data?.title}</h1>}
        {data?.subtitle && <h2>{data?.subtitle}</h2>}
        {data?.description && <RichText richTextDocument={data.description} />}
      </div>
    </div>
  );
};

export default Hero;

