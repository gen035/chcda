import { gql } from '@apollo/client';

export const STEP_FRAGMENT = gql`
  fragment StepFragment on StepsContainer {
    sys {
      id
    }
    stepsCollection(locale: $locale) {
      items {
        ... on Step {
          sys {
            id
          }
          title
          subtitle
          completed
        }
      }
    }
  }
`;