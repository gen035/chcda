import React, { FC } from 'react';
import { BlockInterface } from './interface';
import Full from './full';
import Hero from './hero';

const Block: FC<BlockInterface> = ({ data }) => {
  console.log('DATA', data)
  const renderView = () => {
    switch (data?.type || 'full') {
      case 'full':
        return <Full data={data} />
      case 'hero':
        return <Hero data={data} />;
      case 'contact':
        return <h1>Contact</h1>;
      default:
        return <h1>Not Found</h1>;
    }
  };
  return (renderView());
};

export default Block;
