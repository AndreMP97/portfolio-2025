// Config
import { sectionsConfig, TSection } from "./sections";

// Types
import { TLogoLinkProps } from "components/logoLink";

export type TNavbarConfig = {
  /**
   * The navbar logo props
   */
  logoProps: TLogoLinkProps;

  /**
   * The navbar links
   */
  navLinks: TSection[];
};

export const navbarConfig: TNavbarConfig = {
  logoProps: {
    ariaLabel: "André Pacheco's portfolio",
    href: "#",
    label: "AP",
  },
  navLinks: Object.values(sectionsConfig).filter(
    (section) => section.showInNavbar,
  ),
};
