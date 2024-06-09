import { ButtonInterface } from './buttons';
import { ColumnInterface } from './column';
import { ImageInterface } from './image';
import { StatInterface } from './stat';

export interface BlockInterface {
  data: {
    id?: string,
    type?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: ImageInterface;
    sections?: StatInterface[] | ColumnInterface[];
    button?: ButtonInterface;
  };
}
