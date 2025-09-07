// nanoid
import { nanoid } from "nanoid/non-secure";

type TAboutData = {
  /**
   * The paragraphs to render.
   */
  paragraphs: {
    /**
     * The id of the paragraph.
     */
    id: string;
    /**
     * The paragraph to render.
     */
    paragraph: string;
  }[];
};

export const aboutData: TAboutData = {
  paragraphs: [
    {
      id: nanoid(),
      paragraph:
        "I'm André Pacheco, a software developer living in Portugal. I enjoy creating applications that can be used by everyone on the internet. My interest in software development started at a young age when I decided to inspect the elements of a website, which led me to learn the basics of HTML and CSS.",
    },
    {
      id: nanoid(),
      paragraph:
        "Fast forwarding to 2018, I enrolled in a Bachelor of Science in Electrical and Computer Engineering, which combines the study of electrical engineering and computer science. During my degree, I became familiar with a multitude of subjects such as mathematics, physics, programming, electronics, instrumentation, automation, control, telecommunications, energy systems, and management.",
    },
    {
      id: nanoid(),
      paragraph:
        "Today, with the subjects that I learned during my B.Sc., I have the ability to design and develop software applications. Furthermore, I'm an avid learner who enjoys experimenting with new technologies during my free time, and I'm constantly striving to improve my skills to stay up-to-date with the industry.",
    },
  ],
} as const;
