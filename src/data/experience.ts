/* eslint-disable sort-keys */

// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TExperienceCardProps } from "components/experienceCard";

type TExperienceData = {
  id: string;
  props: TExperienceCardProps;
};

// Helper to generate bullet points with ids
const generateBulletPoints = (points: string[]) =>
  points.map((point) => ({ id: nanoid(), bulletPoint: point }));

// Helper to generate experience card with id
const generateExperience = (props: TExperienceCardProps): TExperienceData => ({
  id: nanoid(),
  props,
});

export const experienceData: TExperienceData[] = [
  generateExperience({
    ariaLabel: "ITSector website",
    href: "https://www.itsector.com/en/",
    position: "Front-end Developer",
    company: "ITSector",
    startDate: "Jun 2024",
    endDate: "Present",
    bulletPoints: generateBulletPoints([
      "Contributed to a project encompassing a design system, web app, and mobile app",
      "Developed and maintained the design system, including code reviews and workflow management",
      "Built features for the web app using React.js",
      "Implemented functionality for the mobile app using React Native",
      "Leveraged cross-platform skills in React.js and React Native, providing management with greater flexibility in resource allocation",
    ]),
  }),
  generateExperience({
    ariaLabel: "CustoJusto website",
    href: "https://www.custojusto.pt",
    position: "Junior Front-end Developer",
    company: "CustoJusto",
    startDate: "Dec 2023",
    endDate: "Jun 2024",
    bulletPoints: generateBulletPoints([
      "Migrated main platform to Next.js to improve performance and maintainability",
      "Developed optimization features to enhance platform speed and user experience",
      "Introduced Tailwind CSS for a modern, scalable redesign",
    ]),
  }),
  generateExperience({
    ariaLabel: "CustoJusto website",
    href: "https://www.custojusto.pt",
    position: "Intern Front-end Developer",
    company: "CustoJusto",
    startDate: "Mar 2023",
    endDate: "Dec 2023",
    bulletPoints: generateBulletPoints([
      "Migrated main platform to Next.js to improve performance and maintainability",
      "Developed optimization features to enhance platform speed and user experience",
      "Introduced Tailwind CSS for a modern, scalable redesign",
    ]),
  }),
];
