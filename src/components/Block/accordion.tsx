import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { AccordionInterface } from './interface';

const Accordion: FC<AccordionInterface> = ({ data }) => {
  return (
    <div className='max-w-screen-md mx-auto p-4'>
      {data?.title && <h1 className='text-center mt-4 mb-4'>{data.title}</h1>}
      {data?.items.map((item, index) => (
        <div className="collapse collapse-arrow bg-base-200 mb-2">
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
