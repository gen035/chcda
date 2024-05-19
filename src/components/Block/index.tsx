import React, { FC } from 'react';
import { BlockInterface } from './interface';
import Hero from './hero';
import Default from './default';

const Block: FC<BlockInterface> = ({ data }) => {
  console.log('DATA', data)
  const renderView = () => {
    switch (data?.type) {
      case 'hero':
      case 'hero--shallow':
        return <Hero data={data} />;
      case 'contact':
        return <h1>Contact</h1>;
      default:
        return <Default data={data} />;
    }
  };
  return (renderView());
};

export default Block;
