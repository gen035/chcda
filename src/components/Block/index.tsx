import React, { FC } from 'react';
import { BlockInterface } from './interface';
import Accordion from './accordion';
import Columns from './columns';
import Default from './default';
import Hero from './hero'
import Stats from './stats';

const Block: FC<BlockInterface> = ({ data }) => {
  console.log('DATA', data)
  const renderView = () => {
    switch (data?.type) {
      case 'hero':
      case 'hero--shallow':
        return <Hero data={data} />;
      case 'columns':
        return <Columns data={data} />;
      case 'stats':
        return <Stats data={data} />;
      case 'accordion':
        return <Accordion data={data} />;
      default:
        return <Default data={data} />;
    }
  };
  return (renderView());
};

export default Block;
