import { gql } from '@apollo/client';
import { BUTTON_FRAGMENT } from '@/api/queries/fragments/button';

export const NAVIGATION_FRAGMENT = gql`
  fragment NavigationFragment on Navigation {
    name
    buttons: buttonsCollection(locale: $locale) {
      items {
        ...ButtonFragment
      }
    }
  }
  ${BUTTON_FRAGMENT}
`;
