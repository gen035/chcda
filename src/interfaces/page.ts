import { SectionInterface } from './sections';
import { MetaDataItemInterface } from './meta';

export interface PageInterface {
  sys?: { id: string };
  name?: string;
  slug?: string;
  metaData?: MetaDataItemInterface;
  sectionsCollection?: {
    items: SectionInterface[];
  };
}
