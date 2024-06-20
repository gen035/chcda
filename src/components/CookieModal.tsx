"use client";
import React, { FC, use, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

const CookieModal: FC = () => {
  const t = useTranslations('cookies.modal');
  const [analytics, setAnalytics] = useState(false);
  const [perso, setPerso] = useState(false);

  useEffect(() => {
    setAnalytics(Cookies.get('ANALYTICS') === 'true');
    setPerso(Cookies.get('PERSO') === 'true');
  }, []);

  const removeGACookies = () => {
    const gaCookies: (string | RegExp)[] = [
      '_ga',
      '_gid',
      '_gat',
      /^_gac_/, // Regex to match _gac_* cookies
      '_utma',
      '_utmb',
      '_utmc',
      '_utmz',
      '_utmv'
    ];

    gaCookies.forEach(cookie => {
      if (typeof cookie === 'string') {
        Cookies.remove(cookie);
      } else if (cookie instanceof RegExp) {
        // Remove cookies matching regex pattern
        Object.keys(Cookies.get()).forEach(cookieName => {
          if (cookie.test(cookieName)) {
            Cookies.remove(cookieName, {path: ''});
          }
        });
      }
    });
  };

  const save = () => {
    if(!perso) {
      Cookies.remove('PERSO', {path: ''});
    } else {
      Cookies.set('PERSO', 'true', { expires: 365 });
    }

    if(!analytics) {
      Cookies.remove('ANALYTICS', { path: '' }) // removed!
      removeGACookies();
    } else {
      Cookies.set('ANALYTICS', 'true', { expires: 365 });
    }

    window.location.reload();
  };

  return (
    <>
      <dialog id="cookie-modal" className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-xl text-center">{t('title')}</h1>
          <div className="form-control">
            <label className="label cursor-pointer">
              <div>
                <h3 className='text-lg font-bold text-indigo'>{t('essential')}</h3>
                <span className="label-text">{t('essentialDesc')}</span>
              </div>
              <input type="checkbox" defaultChecked disabled className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <div>
                <h3 className='text-lg font-bold text-indigo'>{t('analytics')}</h3>
                <span className="label-text">{t('analyticsDesc')}</span>
              </div>
              <input type="checkbox" onChange={() => setAnalytics(prev => !prev)} checked={analytics} className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <div>
                <h3 className='text-lg font-bold text-indigo'>{t('perso')}</h3>
                <span className="label-text">{t('persoDesc')}</span>
              </div>
              <input type="checkbox" onChange={() => setPerso(prev => !prev)} checked={perso} className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => save()} className="btn btn-primary">{t('save')}</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CookieModal;
