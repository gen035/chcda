import { Document } from '@contentful/rich-text-types';

interface Page {
  pageCollection?: Array,
  sectionsCollection?: Array
}

interface Section {
  type?: string,
  layout?: string,
  name?: string,
  title?: string,
  subtitle?: string,
  description?: Document,
  image?: object,
  blocksCollection?: object
}

export const mappedPageData = (data: { page: Page }) => {
  if(data?.pageCollection?.items?.length === 0) {
    return null;
  }

  const pageData = data.pageCollection?.items[0];
  
  return {
    id: pageData.sys?.id,
    name:pageData.name,
    slug: pageData.slug,
    metadata: pageData.metaData,
    sections: mappedSections(pageData.sectionsCollection.items)
  };
};


export const mappedSections = (sections: Array) => {
  console.log('sections',sections)
  const sectionsArray: {id: any; type?:string, title?: string; subtitle?: string, description?: object; image?: object; layout?: string, blocksCollection?: object }[] = [];
  
  sections.forEach((section: Section) => {
    const { title, subtitle, type, description, image, layout, blocksCollection } = section;

    if(!blocksCollection) {
      sectionsArray.push({
        id: section.sys?.id,
        type,
        title,
        subtitle,
        description: description?.json,
        image
      });
    } else if(blocksCollection?.items?.length > 0) {
      const result = {
        type: layout,
        [layout]: mappedSections(blocksCollection?.items)
      };
      sectionsArray.push(result);
    }
    
  })
  return sectionsArray;
};
