import { PageInterface } from './page';
export interface MetaDataItemInterface {
  title?: string;
  description?: string;
  image?: object;
}

export interface MetaDataInterface {
  pageCollection?: {
    items: PageInterface[];
  };
}
