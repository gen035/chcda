export interface ImageInterface {
  __typename?: string;
  url?: string | null;
  title?: string | null;
}

export const mappedImageData = (data: ImageInterface ) => {
  const { url, title } = data;
  return {
    url,
    title
  }
};
