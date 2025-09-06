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

  return { hideLetters, hideLoader, slidePanels };
};
