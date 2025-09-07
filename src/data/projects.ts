/* eslint-disable sort-keys */

// Assets
import ManagmentPlatform from "assets/PESTA.png";
import WeatherProject from "assets/weatherProject.png";

// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TProjectCardProps } from "components/projectCard";

type TProjectsData = {
  id: string;
  props: TProjectCardProps;
};

export const projectsData: TProjectsData[] = [
  {
    id: nanoid(),
    props: {
      image: WeatherProject,
      title: "Weather Forecast",
      description:
        "This project fetches the current weather as well as the forecast for the next day. It served as a learning curve for the React framework and how to integrate third-party APIs, with the main goal to interconnect the data fetched from an API to send to another.",
      url: "https://andremp97.github.io/weather-app/",
      tags: [
        { id: nanoid(), description: "React" },
        { id: nanoid(), description: "Bootstrap" },
        { id: nanoid(), description: "API" },
      ],
    },
  },
  {
    id: nanoid(),
    props: {
      image: ManagmentPlatform,
      title: "Managment Platform",
      description:
        "Full-stack project for my final Bachelor year with the objective for companies to send their internship proposals, for teachers to propose and manage projects, for degree directors to manage the internships, and for students to apply for any of the proposals.",
      url: "https://github.com/AndreMP97/PESTA",
      tags: [
        { id: nanoid(), description: "React" },
        { id: nanoid(), description: "PHP" },
        { id: nanoid(), description: "CSS" },
      ],
    },
  },
];
