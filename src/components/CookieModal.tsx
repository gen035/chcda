"use client";
import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

interface CookieModalProps {
  locale: string;
}

const CookieModal: FC<CookieModalProps> = ({ locale }) => {
  const t = useTranslations('cookies.modal');

  const accept = () => {
    Cookies.set('PERF', 'true', { expires: 365 });
    Cookies.set('PERSO', 'true', { expires: 365 });
    forceReload();
  };

  const forceReload = () => {
    window.location.reload();
  };

  return (
    <>
      <dialog id="cookie-modal" className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-xl">{t('title')}</h1>
          <div className="form-control">
            <label className="label cursor-pointer">
              <div>
                <h3 className='text-lg font-bold text-indigo'>{t('analytics')}</h3>
                <span className="label-text">{t('analyticsDesc')}</span>
              </div>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <div>
                <h3 className='text-lg font-bold text-indigo'>{t('perso')}</h3>
                <span className="label-text">{t('persoDesc')}</span>
              </div>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">{t('save')}</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CookieModal;
