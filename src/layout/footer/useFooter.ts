import { useSectionInView } from "hooks/useSectionInView";

export const useFooter = () => {
  const { ref, motionProps } = useSectionInView<HTMLElement>();

  const currentYear = new Date().getFullYear();

  return { currentYear, motionProps, ref };
};
