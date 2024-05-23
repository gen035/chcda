import { gql } from '@apollo/client';
import { ACCORDION_FRAGMENT } from './fragments/accordion';
import { META_FRAGMENT } from './fragments/meta';
import { SECTIONS_FRAGMENT, SECTION_BLOCKS_FRAGMENT } from './fragments/sections';
import { STEP_FRAGMENT } from './fragments/step';

export const GET_PAGE = gql`
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
        name
        slug
        sectionsCollection(locale: $locale, limit: 10) {
          items {
            ... on Block {
              ...SectionsFragment
            }
            ... on BlockContainer {
              ...SectionBlocksFragment
            }
            ... on Accordion {
              ...AccordionFragment
            }
            ... on StepsContainer {
              ...StepFragment
            }
          }
        }
      }
    }
  }
}
${ACCORDION_FRAGMENT}
${SECTION_BLOCKS_FRAGMENT}
${SECTIONS_FRAGMENT}
${STEP_FRAGMENT}
${META_FRAGMENT}
`;