import { Document } from '@contentful/rich-text-types';

interface MetaData {
  pageCollection?: Array,
}

export const mappedMetaData = (data: { metadata: MetaData }) => {
  if(data?.pageCollection?.items?.length === 0 || !data?.pageCollection?.items[0]?.metaData) {
    return {
      title: 'Cité des ainés',
      description: ''
    };
  }

  const metaData = data.pageCollection?.items[0]?.metaData;
  const { title, description, image } =  metaData;
  return {
   title: 'Cité des ainés - ' + title,
   description,
   image
  };
};
