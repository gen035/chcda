interface Page {
  sys?: { id: string };
  name?: string;
  slug?: string;
  metaData?: object;
  sectionsCollection?: {
    items: Section[];
  };
}

interface Section {
  sys?: { id: string };
  type?: string;
  layout?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: object;
  accordionItemsCollection?: {
    items: any[];
  };
  blocksCollection?: {
    items: Section[];
  };
}

interface MappedSection {
  id?: string;
  type?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: object;
  layout?: string;
  blocksCollection?: MappedSection[];
  items?: any[];
}

export const mappedPageData = (data: { pageCollection?: { items: Page[] } }) => {
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

export const mappedSections = (sections: Section[]): MappedSection[] => {
  return sections.map((section: Section) => {
    const {
      sys,
      title,
      subtitle,
      type,
      description,
      image,
      layout,
      accordionItemsCollection,
      blocksCollection,
    } = section;

    const baseSection: MappedSection = {
      id: sys?.id,
      type,
      title,
      subtitle,
      description,
      image,
      layout,
    };

    if (blocksCollection?.items?.length) {
      return {
        ...baseSection,
        layout,
        type: layout,
        [layout]: mappedSections(blocksCollection.items),
      };
    }

    if (accordionItemsCollection?.items?.length) {
      return {
        ...baseSection,
        type: 'accordion',
        items: accordionItemsCollection.items,
      };
    }

    return baseSection;
  });
};
