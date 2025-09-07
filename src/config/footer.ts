// Config
import { baseConfig } from "./base";

// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TIconLinkProps } from "components/iconLink";

export type TFooterConfig = {
  /**
   * The icons to display in the footer.
   */
  icons?: { icon: TIconLinkProps; id: string }[];

  /**
   * The name to display in the footer,
   */
  name: string;
};

export const footerConfig: TFooterConfig = {
  icons: [
    {
      icon: {
        ariaLabel: "GitHub Page",
        href: baseConfig.github,
        iconName: "FaGithub",
      },
      id: nanoid(),
    },
  ],
  name: "André Pacheco",
};
