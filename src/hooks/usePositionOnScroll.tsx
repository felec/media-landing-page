import { RefObject, useEffect, useState } from 'react';
import { MotionValue } from 'framer-motion';

import { RectBounds, SCROLL_LIMIT } from '../interfaces';
import { isBetween } from '../utils/helpers';

export const usePositionOnScroll = (
  ref: RefObject<HTMLElement>,
  scroll: MotionValue<number>
) => {
  const [position, setPosition] = useState<RectBounds>({
    originTop: 0,
    originLeft: 0,
    top: 0,
    left: 0,
  });

  const calculateOriginLeft = () => {
    const width = window.innerWidth;
    let o = 227;

    if (isBetween(width, 768, 1023)) {
      o = 387;
    } else if (isBetween(width, 1024, 1279)) {
      o = 515;
    } else if (width > 1280) {
      o = 670;
    }

    return width - o;
  };

  useEffect(() => {
    scroll.onChange((scroll) => {
      if (ref.current && scroll < SCROLL_LIMIT) {
        const rect = ref.current.getBoundingClientRect();

        setPosition({
          originLeft: calculateOriginLeft(),
          originTop: 225,
          top: rect.top,
          left: window.innerWidth - rect.width,
        });
      }
    });

    // eslint-disable-next-line
  }, []);

  return { position };
};
