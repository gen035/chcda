import { ButtonInterface, ButtonsInterface } from '@/interfaces/buttons';
import { mappedButtonData } from './button';

export const mappedButtonsData = (data: ButtonsInterface): ButtonInterface[] => {
  if (!data?.items?.length) {
    return [];
  }

  return data.items.map((item: ButtonInterface) => mappedButtonData(item));
};
