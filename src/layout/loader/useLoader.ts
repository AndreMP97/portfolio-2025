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

  const leftPanelAnimate = useMemo(() => {
    if (slidePanels) return isTablet ? "slideUp" : "slideLeft";
    return isTablet ? "hiddenUp" : "hiddenLeft";
  }, [isTablet, slidePanels]);

  const leftPanelClass = useMemo(
    () =>
      isTablet
        ? "bg-midnight-navy absolute top-0 left-0 w-full h-1/2"
        : "bg-midnight-navy absolute top-0 left-0 h-full w-1/2",
    [isTablet],
  );

  const rightPanelAnimate = useMemo(() => {
    if (slidePanels) return isTablet ? "slideDown" : "slideRight";
    return isTablet ? "hiddenDown" : "hiddenRight";
  }, [isTablet, slidePanels]);

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

  // Disable body scroll when loading
  useEffect(() => {
    if (isLoading) {
      // Freeze body scroll
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";

      // Immediately scroll to top
      window.scrollTo({ behavior: "instant", left: 0, top: 0 });
    } else {
      // Unfreeze scroll after animation
      setTimeout(() => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        document.body.style.width = "";

        // Scroll to hash if present
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Otherwise ensure scroll is at top
          window.scrollTo({ behavior: "instant", left: 0, top: 0 });
        }
      }, ANIMATION_SLIDE_PANELS);
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
