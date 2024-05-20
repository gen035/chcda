import { gql } from '@apollo/client';

export const ACCORDION_FRAGMENT = gql`
  fragment AccordionFragment on Accordion {
    sys {
      id
    }
    title
    accordionItemsCollection(locale: $locale) {
      items {
        ... on AccordionItem {
          sys {
            id
          }
          title
          description
        }
      }
    }
  }
`;