import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Múltiples intentos de scroll
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      
      // También intentar con document.body
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Scroll inmediato
    scrollToTop();

    // Scroll después del render
    const timeoutId = setTimeout(scrollToTop, 0);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;