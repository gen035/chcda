import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Columns: FC<BlockInterface> = ({ data }) => {
  console.log('col', data)
  const divStyle = {
    backgroundImage: `url('${data?.image?.url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const getColumnClass = () => {
    switch (data?.columns.length) {
      case 1:
        return 'grid-cols-1 max-w-screen-sm';
      case 2:
        return 'grid-cols-2 max-w-screen-md';
      case 3:
        return 'grid-cols-3 max-w-screen-xl';
      default:
        return 'grid-cols-1 max-w-screen-sm'; // Default to 1 column if out of bounds
    }
  };

  return (
    <div className={`columns  mx-auto grid gap-4 px-4 py-8 ${getColumnClass()}`}>
      {data?.columns.map((column, index) => (
        <div key={index} className="column">
          {column.title && <h1>{column.title}</h1>}
          {column.subtitle && <h2>{column.subtitle}</h2>}
          {column.description && <RichText richTextDocument={column.description} />}
        </div>
      ))}
    </div>
  );
};

export default Columns;
