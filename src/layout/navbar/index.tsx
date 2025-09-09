// Framer-motion
import { AnimatePresence, motion } from "framer-motion";

// Components
import { Icon } from "components/icon";
import { LogoLink } from "components/logoLink";
import { DesktopNavbar } from "./components/desktop";
import { MobileNavbar } from "./components/mobile";

// Config
import { navbarConfig } from "config/navbar";

// Constants
import { navbarAnimations } from "./constants";
import { hoverInteraction } from "utils/animations";

// Hooks
import { useNavbar } from "./useNavbar";

export const Navbar: React.FC = () => {
  const { logoProps, navLinks, onClick: navbarOnClick } = navbarConfig;
  const { closeMobileMenu, isMobileMenuOpen, motionProps, toggleMobileMenu } =
    useNavbar();

  return (
    <motion.header
      variants={navbarAnimations.container}
      {...motionProps}
      className="border-b-space-blue bg-navy-blue flex h-20 w-full items-center justify-center border-b border-solid whitespace-nowrap"
    >
      <nav
        className="container-layout flex flex-1 items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.span
          variants={navbarAnimations.logo}
          {...hoverInteraction}
          className="-rotate-12 p-2"
          tabIndex={-1}
        >
          <LogoLink
            {...logoProps}
            onClick={() => {
              navbarOnClick();
              closeMobileMenu();
            }}
          />
        </motion.span>

        <DesktopNavbar navLinks={navLinks} />

        {/* Mobile Toggle Button */}
        <button
          className="text-2xl text-white focus-visible:outline-none md:hidden"
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
