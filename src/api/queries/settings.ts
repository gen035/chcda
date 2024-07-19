import { gql } from '@apollo/client';

export const GET_SETTINGS = gql`
  query SettingsGlobal($preview: Boolean, $id: String!) {
    settings(id: $id, preview: $preview) {
      phone
      email
      facebook
      location {
        lat
        lon
      }
      logoSmall {
        url
      }
      logoFull {
        url
      }
    }
  }
`;