import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { BlockInterface } from './interface';

interface Stat {
  title?: string;
  subtitle?: string;
  description?: string;
}

const Stats: FC<BlockInterface> = ({ data }) => {
  if (!data?.stats?.length) {
    return null;
  }

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <div className="stats shadow w-full">
        {data.stats.map((stat: Stat, index: number) => (
          <div key={index} className="stat place-items-center">
            {stat.title && <div className="stat-title">{stat.title}</div>}
            {stat.subtitle && <div className="stat-value">{stat.subtitle}</div>}
            {stat.description && (
              <div className="stat-desc">
                <ReactMarkdown>{stat.description}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
