import { gql } from '@apollo/client';
import { META_FRAGMENT } from './fragments/meta';

export const GET_METADATA = gql`
  query Page($preview: Boolean, $locale: String!, $slug: String!) {
  pageCollection(preview: $preview, locale: $locale, limit: 10, where: {slug: $slug}) {
    items {
      ... on Page {
        sys {
          id
        }
        metaData {
          ...MetaFragment
        }
      }
    }
  }
}
${META_FRAGMENT}
`;