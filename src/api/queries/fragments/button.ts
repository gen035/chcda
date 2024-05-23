import { gql } from '@apollo/client';

export const BUTTON_FRAGMENT = gql`
  fragment ButtonFragment on Button {
    text
    type
    url
    target
    image(locale: "en-CA") {
      url
    }
  }
`;
