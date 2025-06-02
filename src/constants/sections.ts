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
  id: string;
  title: string;
  altTitle?: string;
  showInNavbar: boolean;
  showTitle: boolean;
};

export const sections: Record<TSectionKeys, TSection> = {
  [sectionKeys.hero]: {
    id: "hero",
    showInNavbar: false,
    showTitle: false,
    title: "Hero",
  },
  [sectionKeys.about]: {
    id: "about",
    showInNavbar: true,
    showTitle: true,
    title: "About Me",
  },
  [sectionKeys.skills]: {
    id: "skills",
    showInNavbar: true,
    showTitle: true,
    title: "Skills",
  },
  [sectionKeys.projects]: {
    id: "projects",
    showInNavbar: true,
    showTitle: true,
    title: "Projects",
  },
  [sectionKeys.experience]: {
    id: "experience",
    showInNavbar: true,
    showTitle: true,
    title: "Experience",
  },
  [sectionKeys.education]: {
    id: "education",
    showInNavbar: true,
    showTitle: true,
    title: "Education",
  },
  [sectionKeys.contact]: {
    altTitle: "Get in Touch",
    id: "contact",
    showInNavbar: true,
    showTitle: false,
    title: "Contact",
  },
} as const;
