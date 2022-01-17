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
