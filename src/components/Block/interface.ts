import { ButtonInterface } from "@/api/mapping/button";
export interface Image {
  url?: string;
}
export interface StatInterface {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}
export interface ColumnInterface {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}
export interface BlockInterface {
  data: {
    id?: string,
    type?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: Image;
    sections?: StatInterface[] | ColumnInterface[];
    button?: ButtonInterface;
  };
}
export interface AccordionItemInterface {
  sys?: { id?: string };
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

export interface StepItemInterface {
  title: string;
  subtitle: string;
  completed: boolean
}
export interface StepInterface {
  data: {
    id?: string;
    title?: string;
    subtitle?: string;
    completed?: boolean;
    items?: StepItemInterface[];
  };
}
