import { useEffect } from 'react';

export function useEscapeKey(onEscape, enabled) {
  useEffect(() => {
    if (!enabled) return;
    const handler = (event) => {
      if (event.key === 'Escape') onEscape();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onEscape, enabled]);
}
