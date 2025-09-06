import { useState, useEffect, useLayoutEffect, useRef } from "react";

export const DEBOUNCE_DELAY = 300;
export const MOBILE_BREAKPOINT = 768;

export const useIsMobile = () => {
  const timeoutRef = useRef<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      }, DEBOUNCE_DELAY);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isMobile };
};
