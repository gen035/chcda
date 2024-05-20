interface MetaDataItem {
  title?: string;
  description?: string;
  image?: object;
}

interface Page {
  metaData?: MetaDataItem;
}

interface MetaData {
  pageCollection?: {
    items: Page[];
  };
}

export const mappedMetaData = (data: { pageCollection?: { items: Page[] } }) => {
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
