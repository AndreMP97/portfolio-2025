import { useEffect, useState } from "react";
import { useLoadingStore } from "stores/loadingStore";
import {
  ANIMATION_FADE_OUT_LETTERS,
  ANIMATION_SLIDE_PANELS,
} from "./constants";

export const useLoader = () => {
  const isLoading = useLoadingStore((store) => store.isLoading);

  const [hideLetters, setHideLetters] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [slidePanels, setSlidePanels] = useState(false);

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

  // Disable body scroll & scroll to top when loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";

      window.scrollTo(0, 0);
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    }
  }, [isLoading]);

  return { hideLetters, hideLoader, slidePanels };
};
