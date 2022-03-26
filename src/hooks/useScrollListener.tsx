import { useEffect, useRef } from 'react';

export function useScrollListener() {
  const scrollValue = useRef(0);

  useEffect(() => {
    const handler = function (e: Event) {
      // console.log(e);
      setTimeout(() => {
        scrollValue.current = window.scrollY;
      }, 200);
    };

    document.addEventListener('scroll', handler);

    return () => document.removeEventListener('scroll', handler);
  }, []);

  return { scrollValue };
}
