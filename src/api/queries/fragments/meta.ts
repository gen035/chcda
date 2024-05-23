import { gql } from '@apollo/client';

export const META_FRAGMENT = gql`
  fragment MetaFragment on MetaData {
    title
    description
    image(locale: "en-CA") {
      url
    }
  }
`;
