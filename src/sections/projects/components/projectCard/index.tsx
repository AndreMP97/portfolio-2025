// Framer-motion
import { motion } from "framer-motion";

// Components
import { Tag } from "components/tag";

// Constants
import { projectCardAnimations } from "./constants";
import { useSectionInView } from "hooks/useSectionInView";

export type TProjectCardProps = {
  /**
   * The project card description
   */
  description: string;

  /**
   * The project card image
   */
  image: string;

  /**
   * The project card url
   */
  url?: string;

  /**
   * The project card tags
   */
  tags?: string[];

  /**
   * The project card title
   */
  title: string;
};

export const ProjectCard: React.FC<TProjectCardProps> = ({
  description,
  image,
  url,
  tags,
  title,
}) => {
  const { ref, motionProps } = useSectionInView();

  const Wrapper = url ? "a" : "div";

  return (
    <Wrapper
      {...(url
        ? { href: url, rel: "noopener noreferrer", target: "_blank" }
        : {})}
    >
      <motion.div
        ref={ref}
        variants={projectCardAnimations.card}
        {...motionProps}
        className="group flex flex-col gap-4"
      >
        <motion.img
          variants={projectCardAnimations.image}
          className="aspect-video w-full transform overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-lg transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={title}
        />
        <motion.div
          variants={projectCardAnimations.container}
          className="flex flex-col gap-2"
        >
          <motion.h3
            variants={projectCardAnimations.title}
            className="group-hover:text-aqua-mint text-xl leading-normal font-semibold text-white"
          >
            {title}
          </motion.h3>
          <motion.p
            variants={projectCardAnimations.description}
            className="text-lavender-blue mt-2 text-base leading-relaxed font-normal"
          >
            {description}
          </motion.p>
        </motion.div>
        {!!tags && (
          <motion.div
            variants={projectCardAnimations.tags}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag, index) => (
              <Tag key={`tag-${index}`} description={tag} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </Wrapper>
  );
};
