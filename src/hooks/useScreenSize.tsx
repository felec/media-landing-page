import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [size, setSize] = useState(0);

  function handleResize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { size };
};
