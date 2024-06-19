"use client";
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

interface ButtonBannerProps {
  classes: string;
  tKey: string;
}

const BannerButton: FC<ButtonBannerProps> = ({ classes, tKey }) => {
  const t = useTranslations('');

  const openModal = () => {
    const modal = document.getElementById('cookie-modal') as HTMLDialogElement | null;
    if(modal) {
      modal.showModal();
    }
  };

  return (
    <button className={classes} onClick={()=> openModal()}>{t(`${tKey}`)}</button>
  );
};

export default BannerButton;
