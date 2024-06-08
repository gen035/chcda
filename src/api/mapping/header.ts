import { HeaderInterface } from '@/interfaces/header';

import { mappedImageData } from './image';
import { mappedNavigationData } from './navigation';

export const mappedHeaderData = (data: { header: HeaderInterface }) => {
  return {
    logo: data.header.logo ? mappedImageData(data.header.logo) : null,
    navigation: data.header.navigation ? mappedNavigationData(data.header.navigation) : null
  };
};
