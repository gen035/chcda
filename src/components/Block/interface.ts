export interface Image {
  url?: string;
}

export interface Stat {
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface Column {
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface BlockInterface {
  data?: {
    type?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: Image;
    stats?: Stat[];
    columns?: Column[];
  };
}

export interface AccordionItem {
  title?: string;
  description?: string;
}

export interface AccordionInterface {
  data?: {
    id?: string;
    type?: string;
    title?: string;
    items?: AccordionItem[];
  };
}
