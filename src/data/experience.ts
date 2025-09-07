/* eslint-disable sort-keys */

// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TExperienceCardProps } from "components/experienceCard";

type TExperienceData = {
  id: string;
  props: TExperienceCardProps;
};

export const experienceData: TExperienceData[] = [
  {
    id: nanoid(),
    props: {
      ariaLabel: "ITSector website",
      href: "https://www.itsector.com/en/",
      position: "Front-end Developer",
      company: "ITSector",
      startDate: "Jun 2024",
      endDate: "Present",
      bulletPoints: [
        {
          id: nanoid(),
          bulletPoint:
            "Contributed to a project encompassing a design system, web app, and mobile app",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Developed and maintained the design system, including code reviews and workflow management",
        },
        {
          id: nanoid(),
          bulletPoint: "Built features for the web app using React.js",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Implemented functionality for the mobile app using React Native",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Leveraged cross-platform skills in React.js and React Native, providing management with greater flexibility in resource allocation",
        },
      ],
    },
  },
  {
    id: nanoid(),
    props: {
      ariaLabel: "CustoJusto website",
      href: "https://www.custojusto.pt",
      position: "Junior Front-end Developer",
      company: "CustoJusto",
      startDate: "Dec 2023",
      endDate: "Jun 2024",
      bulletPoints: [
        {
          id: nanoid(),
          bulletPoint:
            "Migrated main platform to Next.js to improve performance and maintainability",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Developed optimization features to enhance platform speed and user experience",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Introduced Tailwind CSS for a modern, scalable redesign",
        },
      ],
    },
  },
  {
    id: nanoid(),
    props: {
      ariaLabel: "CustoJusto website",
      href: "https://www.custojusto.pt",
      position: "Intern Front-end Developer",
      company: "CustoJusto",
      startDate: "Mar 2023",
      endDate: "Dec 2023",
      bulletPoints: [
        {
          id: nanoid(),
          bulletPoint:
            "Migrated main platform to Next.js to improve performance and maintainability",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Developed optimization features to enhance platform speed and user experience",
        },
        {
          id: nanoid(),
          bulletPoint:
            "Introduced Tailwind CSS for a modern, scalable redesign",
        },
      ],
    },
  },
];
