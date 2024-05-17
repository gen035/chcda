export interface ButtonInterface {
  text?: string;
  type?: string,
  url: string,
  target?: string,
  image?: object
}

export const mappedButtonData = (data: ButtonInterface ) => {
  const { text, type, url, target, image} = data;
  return {
    text,
    type,
    url,
    target: target || '_self',
    image
  };
};
