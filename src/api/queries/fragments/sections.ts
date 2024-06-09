import { gql } from '@apollo/client';
import { BUTTON_FRAGMENT } from '@/api/queries/fragments/button';

export const SECTIONS_FRAGMENT = gql`
  fragment SectionsFragment on Block {
    sys {
      id
    }
    type
    title
    subtitle
    description
    image(locale: "en-CA") {
      url
    }
    button {
      ...ButtonFragment
    }
  }
 ${BUTTON_FRAGMENT} 
`;

export const SECTION_BLOCKS_FRAGMENT = gql`
  fragment SectionBlocksFragment on BlockContainer {
    sys {
      id
    }
    layout
    blocksCollection(locale: $locale, limit: 10) {
      items {
        ...SectionsFragment
      }
    }
  }
`;
