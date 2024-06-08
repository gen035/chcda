export interface SectionInterface {
  sys?: { id: string };
  type?: string;
  layout?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: object;
  button?: object;
  accordionItemsCollection?: {
    id: string,
    items: SectionInterface[];
  };
  blocksCollection?: {
    id: string;
    items: SectionInterface[];
  };
  stepsCollection?: {
    id: string;
    items: SectionInterface[]
  }
}

export interface MappedSectionInterface {
  id?: string;
  type?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: object;
  layout?: string;
  blocksCollection?: MappedSectionInterface[];
  items?: any[];
  button?: object;
}