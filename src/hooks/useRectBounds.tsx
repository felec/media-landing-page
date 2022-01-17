import { RefObject, useEffect, useState } from 'react';

export const useRectBounds = (ref: RefObject<HTMLElement>, scroll: number) => {
  const [bounds, setBounds] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (ref.current && scroll) {
      const rect = ref.current.getBoundingClientRect();
      setBounds({ top: rect.top, left: rect.left });
    }
  }, [ref, scroll]);

  return { bounds };
};
