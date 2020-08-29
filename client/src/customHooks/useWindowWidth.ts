import { useEffect, useState } from 'react';

export default function () {
  const [widthSize, setWidthSize] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return widthSize;
}
