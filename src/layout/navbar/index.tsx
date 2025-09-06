// Framer-motion
import { AnimatePresence, motion } from "framer-motion";

// Components
import { Icon } from "components/icon";
import { LogoLink, TLogoLinkProps } from "components/logoLink";
import { DesktopNavbar } from "./components/desktop";
import { MobileNavbar } from "./components/mobile";

// Constants
import { TSection } from "constants/sections";
import { navbarAnimations } from "./constants";

// Hooks
import { useNavbar } from "./useNavbar";

export type TNavbarProps = {
  /**
   * The navbar logo props
   */
  logoProps: TLogoLinkProps;
  /**
   * The navbar links
   */
  navLinks: TSection[];
};

export const Navbar: React.FC<TNavbarProps> = ({ logoProps, navLinks }) => {
  const { closeMobileMenu, isMobileMenuOpen, motionProps, toggleMobileMenu } =
    useNavbar();

  return (
    <motion.header
      {...motionProps}
      variants={navbarAnimations.container}
      className="border-b-space-blue bg-navy-blue/70 fixed z-50 flex h-20 w-full items-center justify-center border-b border-solid whitespace-nowrap"
    >
      <nav
        className="container-layout flex h-full flex-1 items-center justify-between backdrop-blur-xs"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.span variants={navbarAnimations.logo} className="-rotate-12">
          <LogoLink {...logoProps} onClick={closeMobileMenu} />
        </motion.span>

        <DesktopNavbar navLinks={navLinks} />

        {/* Mobile Toggle Button */}
        <button
          className="text-2xl text-white focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMobileMenuOpen ? "close" : "menu"}
              variants={navbarAnimations.toggleIcon}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <Icon iconName="FaTimes" />
              ) : (
                <Icon iconName="FaBars" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <MobileNavbar
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        onClose={closeMobileMenu}
      />
    </motion.header>
  );
};
