import { Origins, RectBounds } from '../pages/home/HeroSection';

export const animateMobileVideo = (scroll: number): number => {
  const scale = 11.5;

  if (scroll < 0.05) return scale;

  if (scroll > 0.543) return 0.75;

  const finalScale = scale - scroll * 19.75;

  return finalScale;
};

export const animateLargeVideo = (scroll: number): number => {
  const scale = 11.5;

  if (scroll < 0.03) return scale;

  if (scroll > 0.543) return 1;

  const finalScale = scale - scroll * 19.3;

  return finalScale;
};

export const animateXLeft = (pos: RectBounds) => {
  const translateX = pos.left - pos.originLeft;

  return translateX;
};

export const animateXRight = (pos: RectBounds) => {
  const translateX = pos.originLeft - pos.left;

  return translateX;
};

export const animateYUp = (pos: RectBounds) => {
  const translateY = pos.top - pos.originTop;

  return translateY;
};

export const animateYDown = (pos: RectBounds) => {
  const translateY = pos.originTop - pos.top;

  return translateY;
};
