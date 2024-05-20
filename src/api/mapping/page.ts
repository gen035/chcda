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
  description?: string,
  image?: object,
  accordionItemsCollection?: object,
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
  const sectionsArray: {id: any; type?:string, title?: string; subtitle?: string, description?: string; image?: object; layout?: string, blocksCollection?: object }[] = [];
  
  sections.forEach((section: Section) => {
    const { title, subtitle, type, description, image, layout, accordionItemsCollection, blocksCollection, sys } = section;
    const isSingleBlock = !blocksCollection && !accordionItemsCollection;
  
    if(isSingleBlock) {
      sectionsArray.push({
        id: section.sys?.id,
        type,
        title,
        subtitle,
        description,
        image
      });
    } else if(blocksCollection?.items?.length > 0) {
      const result = {
        type: layout,
        [layout]: mappedSections(blocksCollection?.items)
      };
      sectionsArray.push(result);
    } else if(accordionItemsCollection?.items?.length > 0) {
      console.log(accordionItemsCollection)
      const result = {
        type: 'accordion',
        id: section.sys?.id,
        title,
        items: accordionItemsCollection.items
      }
      sectionsArray.push(result);
    }
    
  })
  return sectionsArray;
};
