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
    id: sectionKeys.hero,
    showInNavbar: false,
    showTitle: false,
    title: "Hero",
  },
  [sectionKeys.about]: {
    id: sectionKeys.about,
    showInNavbar: true,
    showTitle: true,
    title: "About Me",
  },
  [sectionKeys.skills]: {
    id: sectionKeys.skills,
    showInNavbar: true,
    showTitle: true,
    title: "Skills",
  },
  [sectionKeys.projects]: {
    id: sectionKeys.projects,
    showInNavbar: true,
    showTitle: true,
    title: "Projects",
  },
  [sectionKeys.experience]: {
    id: sectionKeys.experience,
    showInNavbar: true,
    showTitle: true,
    title: "Experience",
  },
  [sectionKeys.education]: {
    id: sectionKeys.education,
    showInNavbar: true,
    showTitle: true,
    title: "Education",
  },
  [sectionKeys.contact]: {
    altTitle: "Get in Touch",
    id: sectionKeys.contact,
    showInNavbar: true,
    showTitle: false,
    title: "Contact",
  },
} as const;
