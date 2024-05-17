// fetchContentfulData.ts
import { gql } from '@apollo/client';
import client from './../lib/contentful';
import { QueryInfo } from '@apollo/client/core/QueryInfo';

export const fetchData = async (query, variables: object) => {
  try {
    const { data } = await client.query({
      query,
      variables
    });

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
