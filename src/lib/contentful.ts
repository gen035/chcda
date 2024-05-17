// contentful.ts
import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from '@apollo/client';

const SPACE_ID = process.env.NEXT_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_NODE_ENV === 'development' ? process.env.NEXT_CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

if (!SPACE_ID || !ACCESS_TOKEN) {
  throw new Error('Contentful space ID and access token must be provided.');
}

const httpLink = new HttpLink({
  uri: CONTENTFUL_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
