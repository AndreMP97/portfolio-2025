/* eslint-disable sort-keys */
// Sections
import { AboutSection } from "./about";
import { ContactSection } from "./contact";
import { EducationSection } from "./education";
import { ExperienceSection } from "./experience";
import { HeroSection } from "./hero";
import { ProjectsSection } from "./projects";
import { SkillsSection } from "./skills";

// Types
import { TSectionKeys } from "config/sections";

const sectionComponents: Record<TSectionKeys, React.FC> = {
  hero: HeroSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  education: EducationSection,
  contact: ContactSection,
};

export default sectionComponents;
