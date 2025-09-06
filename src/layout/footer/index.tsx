import { IconLink, TIconLinkProps } from "components/iconLink";
import { motion } from "framer-motion";
import { useFooter } from "./useFooter";
import { footerAnimations, footerInteractions } from "./constants";

export type TFooterProps = {
  /**
   * The icons to display in the footer
   */
  icons?: TIconLinkProps[];
  /**
   * The name to display in the footer
   */
  name: string;
};

export const Footer: React.FC<TFooterProps> = ({ icons = [], name }) => {
  const { ref, motionProps, currentYear } = useFooter();

  return (
    <motion.footer
      ref={ref}
      aria-label="Site footer"
      variants={footerAnimations.container}
      className="border-t-space-blue flex flex-1 flex-col justify-center border-t border-solid"
      {...motionProps}
    >
      <div className="container-layout flex flex-col items-center gap-8 py-12 text-center">
        {icons.length > 0 && (
          <motion.ul
            variants={footerAnimations.iconsContainer}
            className="flex gap-4"
            {...motionProps}
          >
            {icons.map((icon) => (
              <motion.li
                key={icon.href}
                variants={footerAnimations.icon}
                {...footerInteractions}
              >
                <IconLink {...icon} />
              </motion.li>
            ))}
          </motion.ul>
        )}

        <motion.p
          variants={footerAnimations.text}
          className="text-lavender-blue text-lg leading-normal font-normal"
        >
          © {currentYear} {name}. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};
