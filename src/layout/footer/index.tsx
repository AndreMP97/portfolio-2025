// Components
import { IconLink } from "components/iconLink";

// Config
import { footerConfig } from "config/footer";

// Constants
import { footerAnimations, footerInteractions } from "./constants";

// Framer-motion
import { motion } from "framer-motion";

// Hooks
import { useFooter } from "./useFooter";

export const Footer: React.FC = () => {
  const { icons, name } = footerConfig;
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
        {!!icons && icons.length > 0 && (
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
