import { NavigationInterface } from '@/interfaces/navigation';
import { mappedButtonsData } from './buttons';

export const mappedNavigationData = (data: NavigationInterface ) => {
  return data.buttons ? mappedButtonsData(data.buttons) : null;
};
