import { ButtonInterface, mappedButtonData  } from './button';

export interface ButtonsInterface {
  items?: Array
}

export const mappedButtonsData = (data: ButtonsInterface ) => {
  if (!data?.items?.length) {
    return [];
  }

  return data.items.map((item: ButtonInterface) => mappedButtonData(item));
};
