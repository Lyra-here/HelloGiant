import { useEffect } from 'react';

export default function useResize(cb: () => void, delay: number = 300) {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleResize = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        cb();
      }, delay);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [cb, delay]);
}