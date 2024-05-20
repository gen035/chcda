import { Document } from '@contentful/rich-text-types';

export interface BlockInterface {
  data?: {
    type?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    image?: {
      url?: string
    },
    stats?: Array,
    columns?: Array
  }
}

export interface AccordionInterface {
  data?: {
    type?: string,
    title?: string,
    items?: Array
  }
}
