import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { AccordionInterface, AccordionItemInterface } from '@/interfaces/accordion';

const Accordion: FC<AccordionInterface> = ({ data }) => {
  if (!data?.items?.length) {
    return null;
  }

  return (
    <section data-id={data.id} className="accordion max-w-screen-md mx-auto p-4">
      {data.title && <h1 className="text-center text-gradient text-primary mt-4 mb-4">{data.title}</h1>}
      {data.items.map((item: AccordionItemInterface, index: number) => (
        <div key={index} data-id={item.sys?.id} className="accordion-item collapse collapse-arrow bg-base-200 mb-2">
          <input type="radio" name={`accordion-${data.id}`} defaultChecked={index === 0} />
          <div className="collapse-title text-xl font-medium">
            {item.title}
          </div>
          <div className="collapse-content">
            <ReactMarkdown>{item.description}</ReactMarkdown>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
