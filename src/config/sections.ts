// nanoid
import { nanoid } from "nanoid/non-secure";

export const sectionKeys = {
  about: "about",
  contact: "contact",
  education: "education",
  experience: "experience",
  hero: "hero",
  projects: "projects",
  skills: "skills",
} as const;

export type TSectionKeys = keyof typeof sectionKeys;

export type TSection = {
  altTitle?: string;
  id: string;
  showInNavbar: boolean;
  showTitle: boolean;
  title: string;
};

export const sectionsConfig: Record<TSectionKeys, TSection> = {
  [sectionKeys.hero]: {
    id: nanoid(),
    showInNavbar: false,
    showTitle: false,
    title: "Hero",
  },
  [sectionKeys.about]: {
    id: nanoid(),
    showInNavbar: true,
    showTitle: true,
    title: "About Me",
  },
  [sectionKeys.skills]: {
    id: nanoid(),
    showInNavbar: true,
    showTitle: true,
    title: "Skills",
  },
  [sectionKeys.projects]: {
    id: nanoid(),
    showInNavbar: true,
    showTitle: true,
    title: "Projects",
  },
  [sectionKeys.experience]: {
    id: nanoid(),
    showInNavbar: true,
    showTitle: true,
    title: "Experience",
  },
  [sectionKeys.education]: {
    id: nanoid(),
    showInNavbar: true,
    showTitle: true,
    title: "Education",
  },
  [sectionKeys.contact]: {
    altTitle: "Get in Touch",
    id: nanoid(),
    showInNavbar: true,
    showTitle: false,
    title: "Contact",
  },
} as const;
