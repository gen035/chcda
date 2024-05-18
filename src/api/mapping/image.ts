export interface ImageInterface {
  url: string,
  title?: string
}

export const mappedImageData = (data: Array ) => {
  const { url, title } = data;
  return {
    url,
    title
  }
};
