import React, { FC } from 'react';
import { useTranslations } from 'next-intl'
import { ButtonInterface } from '@/api/mapping/button';

import Link from 'next/link';

const NotFound: FC = () => {
  const t = useTranslations('notFound');

  return (
    <div className="hero h-110vh bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="py-6">{t('content')}</p>
          <Link href='/' className="btn btn-primary">{t('button')}</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
