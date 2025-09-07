// Config
import { baseConfig } from "./base";

// Types
import { TIconLinkProps } from "components/iconLink";

export type TFooterConfig = {
  /**
   * The icons to display in the footer.
   */
  icons?: TIconLinkProps[];

  /**
   * The name to display in the footer,
   */
  name: string;
};

export const footerConfig: TFooterConfig = {
  icons: [
    {
      ariaLabel: "GitHub Page",
      href: baseConfig.github,
      iconName: "FaGithub",
    },
  ],
  name: "André Pacheco",
};
