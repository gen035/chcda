import { PageInterface } from '@/interfaces/page';

export const mappedMetaData = (data: { pageCollection?: { items: PageInterface[] } }) => {
  if (!data?.pageCollection?.items?.length || !data.pageCollection.items[0]?.metaData) {
    return {
      title: 'Cité des ainés',
      description: ''
    };
  }

  const metaData = data.pageCollection.items[0].metaData;
  const { title = '', description = '', image } = metaData || {};

  return {
    title: `Cité des ainés - ${title}`,
    description,
    image
  };
};
