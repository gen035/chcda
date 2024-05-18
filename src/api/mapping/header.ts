import { ButtonInterface } from './button';
import { ImageInterface } from './image';
import { mappedImageData } from './image';
import { mappedNavigationData } from './navigation';

interface Header {
  logo?: ImageInterface,
  navigation?: [
    ButtonInterface
  ]
}

export const mappedHeaderData = (data: { header: Header }) => {
  return {
    logo: data.header.logo ? mappedImageData(data.header.logo) : null,
    navigation: data.header.navigation ? mappedNavigationData(data.header.navigation) : null
  };
};
