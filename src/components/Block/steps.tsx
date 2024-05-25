import React, { FC } from 'react';

import { StepInterface } from './interface';

interface StepItem {
  title: string;
  subtitle: string;
  completed: boolean
}

const Steps: FC<StepInterface> = ({ data }) => {
  if (!data?.items?.length) {
    return null;
  }

  return (
    <div data-id={data.id} className="max-w-screen-md mx-auto p-4">
      {data.title && <h1 className="text-center text-primary mt-4 mb-4">{data.title}</h1>}
      <ul className="steps w-full">
        {data.items.map((item: StepItem, index: number) => (
           <li className={`step ${item.completed && 'step-primary'}`}>{item.title}<small>{item.subtitle}</small></li>
        ))}
      </ul>
      
    </div>
  );
};

export default Steps;
