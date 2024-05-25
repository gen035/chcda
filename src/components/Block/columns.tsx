import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { BlockInterface } from './interface';

interface Column {
  id?: string,
  title?: string;
  subtitle?: string;
  description?: string;
}

const Columns: FC<BlockInterface> = ({ data }) => {
  const getColumnClass = () => {
    switch (data?.columns?.length) {
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

  if (!data?.columns?.length) {
    return null;
  }

  return (
    <div data-id={data.id} className={`columns mx-auto grid gap-4 px-4 py-8 ${getColumnClass()}`}>
      {data.columns.map((column: Column, index: number) => (
        <div key={index} data-id={column.id}className="column">
          {column.title && <h1>{column.title}</h1>}
          {column.subtitle && <h2>{column.subtitle}</h2>}
          {column.description && <ReactMarkdown>{column.description}</ReactMarkdown>}
        </div>
      ))}
    </div>
  );
};

export default Columns;
