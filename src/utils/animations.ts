import { RectBounds, SCROLL_LIMIT } from '../interfaces';

export const animateMobileVideo = (scroll: number): number => {
  const scale = 11.5;
  const s = scroll > SCROLL_LIMIT ? SCROLL_LIMIT : scroll;

  if (s < 0.05) return scale;

  const finalScale = scale - s * 32.97;

  return finalScale;
};

export const animateLargeVideo = (scroll: number): number => {
  const scale = 11.5;
  const s = scroll > SCROLL_LIMIT ? SCROLL_LIMIT : scroll;

  if (s < 0.03) return scale;

  const finalScale = scale - s * 32.2;

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
