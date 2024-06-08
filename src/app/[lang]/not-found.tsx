import React, { FC } from 'react';
import Link from 'next/link';
interface NotFoundProps {
  messages: object;
}

const NotFound: FC<NotFoundProps> = ({ messages }) => {
  console.log('here',messages)
  return (
    <div className="hero h-110vh bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">{messages.title && 'Erreur'}</h1>
          <p className="py-6">{messages.content && 'Cette page n\'exite pas'}</p>
          <Link href='/' className="btn btn-primary">{messages.button && 'Accueil'}</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
