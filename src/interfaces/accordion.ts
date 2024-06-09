export interface AccordionItemInterface {
  sys: { id: string };
  title?: string;
  description?: string;
}

export interface AccordionInterface {
  data: {
    id?: string;
    type?: string;
    title?: string;
    items?: AccordionItemInterface[];
  };
}
