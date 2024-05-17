import { gql } from '@apollo/client';
import { NAVIGATION_FRAGMENT } from './navigation';

export const GET_FOOTER = gql`
  query Footer($preview: Boolean, $id: String!, $locale: String!) {
    footer(preview: $preview, id: $id) {
      disclaimer(locale: $locale)
      legalLinks {
        ...NavigationFragment
      }
    }
  }
  ${NAVIGATION_FRAGMENT}
`;