import React, { FC } from 'react';
import { BlockInterface } from '@/interfaces/block'
;
import Accordion from './accordion';
import Columns from './columns';
import Default from './default';
import Hero from './hero'
import Stats from './stats';
import Steps from './steps';

const Block: FC<BlockInterface> = ({ data }) => {
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
      case 'steps':
        return <Steps data={data} />
      default:
        return <Default data={data} />;
    }
  };
  return (renderView());
};

export default Block;
