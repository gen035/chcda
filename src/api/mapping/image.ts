export interface ImageInterface {
  url?: string,
  title?: string
}

export const mappedImageData = (data: ImageInterface ) => {
  const { url, title } = data;
  return {
    url,
    title
  }
};
