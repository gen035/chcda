import React, { FC } from 'react';
import Link from 'next/link';
import { ImageInterface } from '@/interfaces/image';
interface HeaderProps {
  data: {
    logo?: ImageInterface | null,
  },
  locale?: string
}

const Header: FC<HeaderProps> = ({ data, locale }) => {
  const homeLink = locale === 'fr' ? '/' : '/en';
  const langSwitcher = locale === 'en' ? '/fr' : '/en';
  const displayLocale = locale === 'fr' ? 'English' : 'Français';
  return (
    <div className="navbar bg-base-100 bg-transparent relative z-10">
      <div className="flex-1">
        {data.logo && <Link href={homeLink}><img className="w-[200px]" src={data.logo.url ?? ''} title={data.logo.title ?? ''}/></Link>}
      </div>
      <div className="flex-none">
        <Link href={langSwitcher} className="btn btn-primary">{displayLocale}</Link>
      </div>
    </div>
  );
};

export default Header;
