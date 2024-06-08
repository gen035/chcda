import { PageInterface } from '@/interfaces/page';
import { MappedSectionInterface, SectionInterface } from '@/interfaces/sections';

export const mappedPageData = (data: { pageCollection?: { items: PageInterface[] } }) => {
  if (!data?.pageCollection?.items?.length) {
    return null;
  }

  const pageData = data.pageCollection.items[0];

  return {
    id: pageData.sys?.id,
    name: pageData.name,
    slug: pageData.slug,
    metadata: pageData.metaData,
    sections: mappedSections(pageData.sectionsCollection?.items || []),
  };
};

export const mappedSections = (sections: SectionInterface[]): MappedSectionInterface[] => {
  return sections.map((section: SectionInterface) => {
    const {
      sys,
      title,
      subtitle,
      type,
      description,
      image,
      layout,
      button,
      accordionItemsCollection,
      blocksCollection,
      stepsCollection
    } = section;
  
    const baseSection: MappedSectionInterface = {
      id: sys?.id,
      type,
      title,
      subtitle,
      description,
      image,
      layout,
      button
    };

    if (blocksCollection?.items?.length) {
      return {
        ...baseSection,
        layout,
        type: layout,
        sections: mappedSections(blocksCollection.items),
      };
    }

    if (accordionItemsCollection?.items?.length) {
      return {
        type: 'accordion',
        id: section?.sys?.id,
        title: section.title,
        items: accordionItemsCollection.items,
      };
    }

    if(stepsCollection?.items?.length) {
      return {
        type: 'steps',
        id: section?.sys?.id,
        items: stepsCollection?.items
      }
    } 

    return baseSection;
  });
};
