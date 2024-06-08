import { ImageInterface } from './image';
import { mappedImageData } from './image';
import { mappedNavigationData, NavigationInterface } from './navigation';

interface Header {
  logo?: ImageInterface | null;
  navigation?: NavigationInterface | null;
}

export const mappedHeaderData = (data: { header: Header }) => {
  return {
    logo: data.header.logo ? mappedImageData(data.header.logo) : null,
    navigation: data.header.navigation ? mappedNavigationData(data.header.navigation) : null
  };
};
