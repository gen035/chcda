"use client";
import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

interface CookieBannerProps {
  locale: string;
}

const CookieBanner: FC<CookieBannerProps> = ({ locale }) => {
  const t = useTranslations('cookies');

  const accept = () => {
    Cookies.set('ANALYTICS', 'true', { expires: 365 });
    Cookies.set('PERSO', 'true', { expires: 365 });
    forceReload();
  };

  const forceReload = () => {
    window.location.reload();
  };

  const openModal = () => {
    const modal = document.getElementById('cookie-modal') as HTMLDialogElement | null;
    if(modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <div role="alert" className="alert fixed bottom-0 rounded-none z-10">
        <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="#312e81" strokeWidth="1.608" strokeLinecap="round" strokeLinejoin="round"/> </g>
        </svg>
        <span>
          {t('text')}&nbsp;
          <Link href={`/${locale}${t('policyLink')}`} className="link link-hover text-sm text-blue">{t('policy')}</Link>
        </span>
        <div>
          <button className="btn btn-sm mr-1" onClick={()=> openModal()}>{t('settings')}</button>
          <button className="btn btn-sm btn-primary" onClick={() => accept()}>{t('accept')}</button>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
