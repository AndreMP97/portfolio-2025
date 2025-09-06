// Framer-motion
import { motion } from "framer-motion";
import { sectionAnimations } from "./constants";
import { useSectionInView } from "hooks/useSectionInView";

export type TSectionLayoutProps = {
  /**
   * Content to be displayed inside the sectioni
   */
  children: React.ReactNode;

  /**
   * The section id
   */
  id: string;

  /**
   * The section title
   * @optional
   */
  title?: string;
};

export const SectionLayout: React.FC<TSectionLayoutProps> = ({
  id,
  title,
  children,
}) => {
  const { ref, motionProps } = useSectionInView<HTMLHeadingElement>();

  return (
    <section className="flex scroll-mt-24 flex-col gap-6" id={id}>
      {title && (
        <motion.h2
          ref={ref}
          variants={sectionAnimations.title}
          {...motionProps}
          className="text-center text-3xl leading-tight font-bold tracking-tight text-white md:text-left"
        >
          {title}
        </motion.h2>
      )}
      <div className="section-container">{children}</div>
    </section>
  );
};
