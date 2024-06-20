"use client";
import React, { FC, useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import Cookies from 'js-cookie';

const GoogleAnalyticsWrapper: FC = () => {
    const [loadGa, setLoadGa] = useState(false);

    useEffect(() => {
       const isProd = process.env.NODE_ENV === 'production';
        const analyticsCookie = Cookies.get('ANALYTICS') ? true : false;
        setLoadGa(isProd && analyticsCookie);
    }, []);

  return (
    <>
      {loadGa && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA || ""} />}
    </>
  );
};

export default GoogleAnalyticsWrapper;
