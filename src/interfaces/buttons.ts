export interface ButtonInterface {
  text?: string;
  type?: string,
  url: string,
  target?: string,
  image?: object
}

export interface ButtonsInterface {
  items?: ButtonInterface[];
}
