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
  wrapInLayout: boolean;
};

export const sections: Record<TSectionKeys, TSection> = {
  [sectionKeys.hero]: {
    id: "hero",
    showInNavbar: false,
    title: "Hero",
    wrapInLayout: false,
  },
  [sectionKeys.about]: {
    id: "about",
    showInNavbar: true,
    title: "About Me",
    wrapInLayout: true,
  },
  [sectionKeys.skills]: {
    id: "skills",
    showInNavbar: true,
    title: "Skills",
    wrapInLayout: true,
  },
  [sectionKeys.projects]: {
    id: "projects",
    showInNavbar: true,
    title: "Projects",
    wrapInLayout: true,
  },
  [sectionKeys.experience]: {
    id: "experience",
    showInNavbar: true,
    title: "Experience",
    wrapInLayout: true,
  },
  [sectionKeys.education]: {
    id: "education",
    showInNavbar: true,
    title: "Education",
    wrapInLayout: true,
  },
  [sectionKeys.contact]: {
    altTitle: "Get in Touch",
    id: "contact",
    showInNavbar: true,
    title: "Contact",
    wrapInLayout: false,
  },
} as const;
