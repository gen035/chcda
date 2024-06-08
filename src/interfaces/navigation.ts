import { ButtonInterface } from "./buttons";

export interface NavigationInterface {
  __typename: string;
  name: string;
  buttons?: {
    __typeName: string;
    items?: ButtonInterface[];
  }
}