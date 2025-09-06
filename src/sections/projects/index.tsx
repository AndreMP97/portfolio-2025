// Components
import { ProjectCard } from "./components/projectCard";

// Constants
import { projects } from "constants/projects";

export const ProjectsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8">
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};
