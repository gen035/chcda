import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown'

import { BlockInterface } from './interface';

const Stats: FC<BlockInterface> = ({ data }) => {
  console.log(data)
  return (
    <div className='max-w-screen-md mx-auto px-4'>
      <div className="stats shadow w-full">
        {data?.stats.map((stat, index) => (
          <div key={index} className="stat place-items-center">
            {stat?.title && <div className="stat-title">{stat.title}</div>}
            {stat?.subtitle && <div className="stat-value">{stat.subtitle}</div>}
            {stat?.description && <div className="stat-desc"><ReactMarkdown>{stat.description}</ReactMarkdown></div>}
          </div>
        ))}      
      </div>
    </div>
  );
};

export default Stats;
