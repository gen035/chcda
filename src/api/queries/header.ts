import { gql } from '@apollo/client';
import { NAVIGATION_FRAGMENT } from './navigation';

export const GET_HEADER = gql`
  query Header($preview: Boolean, $id: String!, $locale: String!) {
    header(preview: $preview, id: $id, locale: $locale) {
      logo { 
        url(locale: "en-CA")
        title
      }
      navigation {
        ...NavigationFragment
      }
    }
  }
  ${NAVIGATION_FRAGMENT}
`;
