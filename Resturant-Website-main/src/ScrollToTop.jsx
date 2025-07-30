import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay scroll slightly to ensure route content loads first
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // can increase to 100 if needed for async data

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
