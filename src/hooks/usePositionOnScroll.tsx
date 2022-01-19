import { RefObject, useEffect, useState } from 'react';
import { MotionValue } from 'framer-motion';

import { RectBounds, SCROLL_LIMIT } from '../interfaces';

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

  useEffect(() => {
    scroll.onChange((scroll) => {
      if (ref.current && scroll < SCROLL_LIMIT) {
        const rect = ref.current.getBoundingClientRect();

        setPosition({
          originLeft: window.innerWidth / 5.4,
          originTop: 225,
          top: rect.top,
          left: rect.left,
        });
      }
    });

    // eslint-disable-next-line
  }, []);

  return { position };
};
