export interface StepItemInterface {
  title: string;
  subtitle: string;
  completed: boolean;
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