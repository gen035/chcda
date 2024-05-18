// fetchContentfulData.ts
import client from './../lib/contentful';

export const fetchData = async (query, variables: object) => {
  console.log(query)
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
