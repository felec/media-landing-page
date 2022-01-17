import { RefObject, useEffect, useState } from 'react';
import { MotionValue } from 'framer-motion';

import { RectBounds } from '../pages/home/HeroSection';

export const useElementPosition = (
  ref: RefObject<HTMLElement>,
  scroll: MotionValue<number>
) => {
  const [position, setPosition] = useState<RectBounds>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    scroll.onChange((_) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();

        setPosition({
          top: rect.top,
          left: rect.left,
        });
      }
    });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      setPosition({
        top: rect.top,
        left: rect.left,
      });
    }
  }, [ref]);

  return { position };
};
