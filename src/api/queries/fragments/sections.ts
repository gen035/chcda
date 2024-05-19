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
