import { gql } from '@apollo/client';

export const SECTIONS_FRAGMENT = gql`
  fragment SectionsFragment on Block {
    sys {
      id
    }
    title
    description {
      json
    }
    image {
      url
    }
  }
`;
