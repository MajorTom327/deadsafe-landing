import { propOr } from "ramda";

export type ImageWidth = 640 | 750 | 828 | 1080 | 1200;

type ImageOptimizeOptions = Partial<{
  width: ImageWidth;
  quality: number;
}>;

export const getImageUrl = (src: string, options?: ImageOptimizeOptions) => {
  const params = new URLSearchParams({
    url: src,
    w: propOr(640, "width", options),
    q: propOr(75, "quality", options),
  });

  return `/_vercel/image?${params}`;
};

export default getImageUrl;
