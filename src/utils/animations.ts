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

export const animateXLeft = (scroll: number): number => {
  const x = -690;

  if (scroll > 0.543) return 0;

  const finalX = x + scroll * 900;
  console.log(finalX);
  if (finalX > 0) return 0;

  return finalX;
};

export const animateXRight = (scroll: number): number => {
  const x = -680;

  const finalX = x + scroll * 1000;

  if (finalX > 0) return 0;

  return finalX;
};

export const animateYUp = (scroll: number): number => {
  const y = 0;

  if (scroll < 0.1) return y;

  const finalY = scroll * -50;

  return finalY > -25 ? -25 : finalY;
};

export const animateYDown = (scroll: number): number => {
  const y = 0;

  if (scroll < 0.1) return y;

  const finalY = scroll * 50;

  return finalY > 25 ? 25 : finalY;
};
