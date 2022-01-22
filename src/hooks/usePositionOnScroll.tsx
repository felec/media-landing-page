import { RefObject, useEffect, useState } from 'react';
import { MotionValue } from 'framer-motion';

import { RectBounds } from '../types';
import { isBetween } from '../utils/calculate';

export const usePositionOnScroll = (
  ref: RefObject<HTMLElement>,
  scroll: MotionValue<number>
) => {
  const [position, setPosition] = useState<RectBounds>({
    originTop: 0,
    originLeft: 0,
    top: 0,
    left: 0,
    scroll: 0,
  });

  const calculateLeft = () => {
    const w = window.innerWidth;
    let origin = 227;

    if (isBetween(w, 768, 1023)) {
      origin = 387;
    } else if (isBetween(w, 1024, 1279)) {
      origin = 515;
    } else if (w > 1280) {
      origin = 670;
    }

    return w - origin;
  };

  const calculateTop = () => {
    const h = window.innerWidth;
    let origin = 228;

    if (isBetween(h, 768, 1023)) {
      origin = 383;
    } else if (isBetween(h, 1024, 1279)) {
      origin = 543;
    } else if (h > 1280) {
      origin = 303;
    }

    return origin;
  };

  useEffect(() => {
    scroll.onChange((scroll) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();

        setPosition({
          originLeft: calculateLeft(),
          originTop: calculateTop(),
          top: rect.top,
          left: window.innerWidth - rect.width,
          scroll,
        });
      }
    });

    // eslint-disable-next-line
  }, []);

  return { position };
};
