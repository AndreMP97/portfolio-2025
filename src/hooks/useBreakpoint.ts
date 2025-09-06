import { useState, useEffect, useLayoutEffect, useRef } from "react";

export const BREAKPOINT_MOBILE = 768;
export const BREAKPOINT_TABLET = 992;
export const DEBOUNCE_DELAY = 300;

export const useBreakpoint = () => {
  const timeoutRef = useRef<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < BREAKPOINT_MOBILE);
    setIsTablet(window.innerWidth < BREAKPOINT_TABLET);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsMobile(window.innerWidth < BREAKPOINT_MOBILE);
        setIsTablet(window.innerWidth < BREAKPOINT_TABLET);
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

  return { isMobile, isTablet };
};
