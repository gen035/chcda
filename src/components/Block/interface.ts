import { Document } from '@contentful/rich-text-types';

export interface BlockInterface {
  data?: {
    type?: string,
    title?: string,
    subtitle?: string,
    description?: Document,
    displayForm?: boolean,
    image?: {
      url?: string
    },
  }
}
