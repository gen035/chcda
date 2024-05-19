import { gql } from '@apollo/client';

export const SECTIONS_FRAGMENT = gql`
  fragment SectionsFragment on Block {
    sys {
      id
    }
    type
    title
    subtitle
    description {
      json
    }
    displayForm
    image {
      url
    }
  }
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
