import { gql } from '@apollo/client';

export const GET_FOOTER = gql`
  query Footer($preview: Boolean, $id: String!, $locale: String!) {
  footer(preview: $preview, id: $id) {
    disclaimer(locale: $locale)
  }
}
`;