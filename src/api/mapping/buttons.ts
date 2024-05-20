import { ButtonInterface, mappedButtonData } from './button';

export interface ButtonsInterface {
  items?: ButtonInterface[];
}

export const mappedButtonsData = (data: ButtonsInterface): ButtonInterface[] => {
  if (!data?.items?.length) {
    return [];
  }

  return data.items.map((item: ButtonInterface) => mappedButtonData(item));
};
