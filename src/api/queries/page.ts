import { gql } from '@apollo/client';
import { META_FRAGMENT } from './fragments/meta';
import { SECTIONS_FRAGMENT } from './fragments/sections';

export const GET_PAGE = gql`
  query Page($preview: Boolean, $locale: String!, $slug: String!) {
  pageCollection(preview: $preview, locale: $locale, limit: 1, where: {slug: $slug}) {
    items {
      ... on Page {
        sys {
          id
        }
        metaData {
          ...MetaFragment
        }
        name
        slug
        sectionsCollection(locale: $locale, limit: 10) {
          items {
            ...SectionsFragment
          }
        }
      }
    }
  }
}
${SECTIONS_FRAGMENT}
${META_FRAGMENT}
`;