// Component
import { ProjectCard } from "components/projectCard";

// Data
import { projectsData } from "data/projects";

export const ProjectsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
