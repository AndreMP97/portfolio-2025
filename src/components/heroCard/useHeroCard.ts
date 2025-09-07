// React
import { useMemo } from "react";

// Constants
import { heroCardAnimations } from "./constants";

// Hooks
import { useSectionInView } from "hooks/useSectionInView";

// Providers
import { useBreakpointContext } from "providers/breakpointProvider";

export const useHeroCard = () => {
  const { ref, motionProps } = useSectionInView();

  const { isMobile } = useBreakpointContext();

  const animations = useMemo(
    () => (isMobile ? heroCardAnimations.mobile : heroCardAnimations.desktop),
    [isMobile],
  );

  return { heroCardAnimations: animations, motionProps, ref };
};
