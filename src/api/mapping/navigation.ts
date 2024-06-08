import { mappedButtonsData } from './buttons';
import { ButtonInterface } from './button';
export interface NavigationInterface {
  __typename: string;
  name: string;
  buttons?: {
    __typeName: string;
    items?: ButtonInterface[];
  }
}

export const mappedNavigationData = (data: NavigationInterface ) => {
  return data.buttons ? mappedButtonsData(data.buttons) : null;
};
