/* eslint-disable sort-keys */

// Types
import { TEducationCardProps } from "components/educationCard";
import { educationCardType } from "components/educationCard/types";

export const educationData: TEducationCardProps[] = [
  {
    title: "Bachelor of Science in Electrical and Computer Engineering",
    place: "ISEP - Instituto Superior de Engenharia do Porto",
    startDate: "2014",
    endDate: "2018",
    description:
      "Studied Electrical and Computer Engineering with a hands-on approach, completing multiple software projects and explored emerging trends in electronics, automation, networks, IoT, and renewable energy.",
    bulletPointsTitle: "Key Highlights:",
    bulletPoints: [
      "Designed and built digital and electronic systems through hands-on coursework",
      "Applied network, automation, and computational skills in real-world projects",
      "Completed a full-stack final degree project proposed and guided by the institution",
    ],
    type: educationCardType.university,
  },
];
