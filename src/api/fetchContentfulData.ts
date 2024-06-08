// fetchContentfulData.ts
import client from './../lib/contentful';
import { DocumentNode } from 'graphql';

export const fetchData = async (query: DocumentNode, variables: object) => {
  try {
    const { data } = await client.query({
      query,
      variables
    });

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error, query);
    return [];
  }
};
