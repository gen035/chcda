import React, { FC } from 'react';
import { BlockInterface } from './interface';
import Full from './full';

const Block: FC<BlockInterface> = ({ data }) => {
  console.log('DATA', data)
  const renderView = () => {
    switch (data?.type || 'full') {
      case 'full':
        return <Full data={data} />
      case 'about':
        return <h1>About</h1>;
      case 'contact':
        return <h1>Contact</h1>;
      default:
        return <h1>Not Found</h1>;
    }
  };
  return (renderView());
};

export default Block;
