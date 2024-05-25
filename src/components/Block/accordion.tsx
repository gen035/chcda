import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { AccordionInterface } from './interface';

interface AccordionItem {
  title: string;
  description: string;
}

const Accordion: FC<AccordionInterface> = ({ data }) => {
  if (!data?.items?.length) {
    return null;
  }
console.log(data)
  return (
    <div data-id={data.id} className="max-w-screen-md mx-auto p-4">
      {data.title && <h1 className="text-center text-primary mt-4 mb-4">{data.title}</h1>}
      {data.items.map((item: AccordionItem, index: number) => (
        <div key={index} data-id={item.sys?.id} className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="radio" name={`accordion-${data.id}`} defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {item.title}
          </div>
          <div className="collapse-content">
            <ReactMarkdown>{item.description}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
