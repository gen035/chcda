import { Document } from '@contentful/rich-text-types';

interface Page {
  pageCollection?: Array,
  sectionsCollection?: Array
}

interface Section {
  type?: string,
  name?: string,
  title?: string,
  subtitle?: string,
  description?: Document,
  displayForm?: Boolean,
  image?: object
}

export const mappedPageData = (data: { page: Page }) => {
  if(data?.pageCollection?.items?.length === 0) {
    return null;
  }

  const pageData = data.pageCollection.items[0];
  
  return {
    id: pageData.sys?.id,
    name:pageData.name,
    slug: pageData.slug,
    metadata: pageData.metaData,
    sections: mappedSections(pageData.sectionsCollection.items)
  };
};


export const mappedSections = (sections: Array) => {
  const sectionsArray: {id: any; type?:string, title?: string; subtitle?: string, description?: object; displayForm?: boolean; image?: object; }[] = [];
  
  sections.forEach((section: Section) => {
    const { title, subtitle, type, description, displayForm, image } = section;
    sectionsArray.push({
      id: section.sys?.id,
      type,
      title,
      subtitle,
      description: description?.json,
      displayForm,
      image
    });
  })
  console.log(sectionsArray)
  return sectionsArray;
};
