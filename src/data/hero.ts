// Config
import { baseConfig } from "config/base";

// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { THeroCardProps } from "components/heroCard";

export const heroData: THeroCardProps = {
  buttons: [
    {
      ariaLabel: "Resume download",
      href: baseConfig.resume,
      id: nanoid(),
      label: "Resume",
    },
  ],
  description:
    "Always dedicated to create high-quality, dynamic, and interactive websites. Constantly learning new technologies to both improve my skills and stay current with the industry. Always looking for new challenges to grow as a developer.",
  subtitle: "A Software Developer passionate about web development.",
  title: "Hello, I'm André Pacheco.",
} as const;
