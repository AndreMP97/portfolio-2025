// React
import { useEffect, useMemo, useState } from "react";

// Constants
import {
  ANIMATION_FADE_OUT_LETTERS,
  ANIMATION_SLIDE_PANELS,
} from "./constants";

// Provider context
import { useBreakpointContext } from "providers/breakpointProvider";

// Zustand Store
import { useLoadingStore } from "stores/loadingStore";

export const useLoader = () => {
  const { isTablet } = useBreakpointContext();
  const isLoading = useLoadingStore((store) => store.isLoading);

  const [hideLetters, setHideLetters] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [slidePanels, setSlidePanels] = useState(false);

  const leftPanelAnimate = useMemo(
    () =>
      slidePanels
        ? isTablet
          ? "slideUp"
          : "slideLeft"
        : isTablet
          ? "hiddenUp"
          : "hiddenLeft",
    [isTablet, slidePanels],
  );

  const leftPanelClass = useMemo(
    () =>
      isTablet
        ? "bg-midnight-navy absolute top-0 left-0 w-full h-1/2"
        : "bg-midnight-navy absolute top-0 left-0 h-full w-1/2",
    [isTablet],
  );

  const rightPanelAnimate = useMemo(
    () =>
      slidePanels
        ? isTablet
          ? "slideDown"
          : "slideRight"
        : isTablet
          ? "hiddenDown"
          : "hiddenRight",
    [isTablet, slidePanels],
  );

  const rightPanelClass = useMemo(
    () =>
      isTablet
        ? "bg-midnight-navy absolute bottom-0 left-0 w-full h-1/2"
        : "bg-midnight-navy absolute top-0 left-1/2 h-full w-1/2",
    [isTablet],
  );

  // When loading ends, fade out letters, then slide panels
  useEffect(() => {
    if (!isLoading) {
      setHideLetters(true);

      const timer = setTimeout(
        () => setSlidePanels(true),
        ANIMATION_FADE_OUT_LETTERS,
      );
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Hide loader completely after panels finish sliding
  useEffect(() => {
    if (slidePanels) {
      const timer = setTimeout(
        () => setHideLoader(true),
        ANIMATION_SLIDE_PANELS,
      );
      return () => clearTimeout(timer);
    }
  }, [slidePanels]);

  // Disable body scroll and scroll to top when loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";

      window.scrollTo(0, 0);
    } else {
      setTimeout(
        () => (document.body.style.overflow = ""),
        ANIMATION_SLIDE_PANELS,
      );

      // If there's a hash in the URL, scroll to it
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [isLoading]);

  return {
    hideLetters,
    hideLoader,
    leftPanelAnimate,
    leftPanelClass,
    rightPanelAnimate,
    rightPanelClass,
  };
};
