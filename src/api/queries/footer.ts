import { gql } from '@apollo/client';
import { NAVIGATION_FRAGMENT } from './fragments/navigation';

export const GET_FOOTER = gql`
  query Footer($preview: Boolean, $id: String!, $locale: String!) {
    footer(preview: $preview, id: $id) {
      disclaimer
      legalLinks {
        ...NavigationFragment
      }
    }
  }
  ${NAVIGATION_FRAGMENT}
`;