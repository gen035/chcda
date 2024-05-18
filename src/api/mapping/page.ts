import { metadata } from '@/app/[lang]/layout';
import { ButtonInterface } from './button';
import { ImageInterface } from './image';
import { mappedImageData } from './image';
import { mappedNavigationData } from './navigation';

interface Page {
  pageCollection?: Array,
  sectionsCollection?: Array
}

interface Section {
  title?: string,
  description?: object,
  image?: object
}

export const mappedPageData = (data: { page: Page }) => {
  
  if(data?.pageCollection?.items?.length === 0) {
    return null;
  }

  const pageData = data.pageCollection.items[0];

  console.log(pageData)
  return {
    id: pageData.sys?.id,
    slug: pageData.slug,
    metadata,
    sections: mappedSections(pageData.sectionsCollection.items)
  };
};


export const mappedSections = (sections: Array) => {
  const sectionsArray: {id: any; title?: string; description?: object; image?: object; }[] = [];
  
  sections.forEach((section: Section) => {
    const { title, description, image } = section;
    sectionsArray.push({
      id: section.sys?.id,
      title,
      description,
      image
    });
  })
  console.log(sectionsArray)
  return sectionsArray;
};
