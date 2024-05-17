import { gql } from '@apollo/client';

export const NAVIGATION_FRAGMENT = gql`
  fragment NavigationFragment on Navigation {
    name
  }
`;
