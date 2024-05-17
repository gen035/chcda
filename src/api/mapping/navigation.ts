import { mappedButtonsData } from "./buttons";

export const mappedNavigationData = (data: Array ) => {
  return data.buttons ? mappedButtonsData(data.buttons) : null;
};
