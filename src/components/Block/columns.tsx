import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { BlockInterface } from '@/interfaces/block';
import { ColumnInterface } from '@/interfaces/column';

const Columns: FC<BlockInterface> = ({ data }) => {
  const getColumnClass = () => {
    switch (data?.sections?.length) {
      case 1:
        return 'grid-cols-1 max-w-screen-sm';
      case 2:
        return 'grid-cols-1 max-w-screen-md md:grid-cols-2';
      case 3:
        return 'grid-cols-3 max-w-screen-xl';
      default:
        return 'grid-cols-1 max-w-screen-sm'; // Default to 1 column if out of bounds
    }
  };

  if (!data?.sections?.length) {
    return null;
  }

  return (
    <div data-id={data.id} className={`columns mx-auto grid gap-4 px-4 py-8 ${getColumnClass()}`}>
      {data.sections.map((column: ColumnInterface, index: number) => (
        <div key={index} data-id={column.id}className="column">
          {column.title && <h1>{column.title}</h1>}
          {column.subtitle && <h2 className='text-gradient'>{column.subtitle}</h2>}
          {column.description && <ReactMarkdown>{column.description}</ReactMarkdown>}
        </div>
      ))}
    </div>
  );
};

export default Columns;
