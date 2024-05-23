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

  const formatValue = (value: string) => {
    const regex = /sqft\*|pi2\*/gi; // Regular expression to match "sqft*" or "pi2*" (case-insensitive)
    const matches = value.match(regex); // Find all matches in the string
    const trimmedValue = value.replace(regex, '').trim();
    if(matches && matches.length > 0) {
       return <>{trimmedValue}{matches && <small className='text-xs'>{matches[0]}</small>}</>
    }
    return <>{value}</>
  };

  return (
    <div data-id={data.id} className="max-w-screen-md mx-auto px-4">
      <div className="stats stats-vertical shadow w-full md:stats-horizontal">
        {data.stats.map((stat: Stat, index: number) => (
          <div key={index} data-id={stat.id} className="stat place-items-center">
            {stat.title && <div className="stat-title">{stat.title}</div>}
            {stat.subtitle && <div className="stat-value">{formatValue(stat.subtitle)}</div>}
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
