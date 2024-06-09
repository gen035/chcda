import { ButtonInterface } from '@/interfaces/buttons';

export const mappedButtonData = (data: ButtonInterface ) => {
  const { text, type, url, target, image} = data;
  return {
    text,
    type,
    url,
    target: target || '_self',
    image
  };
};
