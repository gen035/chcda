import { ImageInterface } from './image';
import { NavigationInterface } from './navigation';

export interface HeaderInterface {
  logo?: ImageInterface | null;
  navigation?: NavigationInterface | null;
}