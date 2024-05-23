import React, { FC } from 'react';
import { ButtonInterface } from '@/api/mapping/button';
import { ImageInterface } from '@/api/mapping/image';

import Link from 'next/link';

interface HeaderProps {
  data: {
    logo?: ImageInterface,
  },
  locale?: string
}
const Header: FC<HeaderProps> = ({ data, locale }) => {
  const homeLink = locale === 'en' ? '/' : '/fr';
  const langSwitcher = locale === 'en' ? '/fr' : '/';
  const displayLocale = locale === 'fr' ? 'English' : 'Français';
  return (
    <div className="navbar bg-base-100 bg-transparent relative z-10">
      <div className="flex-1">
        <Link href={homeLink}><img className="w-[200px]" src={data.logo?.url} title={data.logo?.title}/></Link>
      </div>
      <div className="flex-none">
        <a href={langSwitcher} className="btn btn-primary">{displayLocale}</a>
      </div>
    </div>
  );
};

export default Header;
