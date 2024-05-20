import { mappedButtonsData } from './buttons';
export interface NavigationInterface {
  buttons?: Array;
}

export const mappedNavigationData = (data: NavigationInterface ) => {
  return data.buttons ? mappedButtonsData(data.buttons) : null;
};
