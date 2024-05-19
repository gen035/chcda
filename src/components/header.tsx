import React, { FC } from 'react';
import { ButtonInterface } from '@/api/mapping/button';
import { ImageInterface } from '@/api/mapping/image';

import Link from 'next/link';

interface HeaderProps {
  data: {
    logo?: ImageInterface,
  }
}
const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <div className="navbar bg-base-100 bg-transparent relative z-10">
      <div className="flex-1">
        <Link href="/"><img className="w-[200px]" src={data.logo?.url} title={data.logo?.title}/></Link>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
