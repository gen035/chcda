import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { BlockInterface } from './interface';

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
    <div data-id={data?.id} className={`flex mx-auto mb-8 px-4 py-0 justify-center items-center relative ${getClasses()}`}>
      <div className="hero-filter brightness-50 absolute top-0 left-0 w-full h-full" style={divStyle}></div>
      <div className={`text-white content z-10 ${data?.type === 'hero' ? 'w-full md:w-3/4 lg:w-1/2 flex flex-col' : ''}`}>
        {data?.title && <h1 className='order-2'>{data?.title}</h1>}
        {data?.subtitle && <h2 className='order-1'>{data?.subtitle}</h2>}
        {data?.description && <ReactMarkdown className='order-3'>{data.description}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default Hero;
