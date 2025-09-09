// Config
import { sectionsConfig, TSection } from "./sections";

// Types
import { TLogoLinkProps } from "components/logoLink";

export type TNavbarConfig = {
  /**
   * The navbar logo props.
   */
  logoProps: TLogoLinkProps;

  /**
   * The navbar links.
   */
  navLinks: TSection[];

  /**
   * The navbar onClick handler.
   */
  onClick: () => void;
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
  onClick: () =>
    document
      .getElementById("content-wrapper")
      ?.scrollTo({ behavior: "smooth", left: 0, top: 0 }),
};
