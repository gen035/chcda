import { ImageInterface } from '@/interfaces/image';

export const mappedImageData = (data: ImageInterface ) => {
  const { url, title } = data;
  return {
    url,
    title
  }
};
