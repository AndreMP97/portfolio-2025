// Components
import sectionComponents from "@sections";
import { SectionLayout } from "components/sectionLayout";

// Constants
import { sectionsConfig, TSectionKeys } from "config/sections";

export const PageLayout: React.FC = () => {
  return (
    <main className="container-layout flex flex-1 flex-col justify-start gap-16 py-16 lg:gap-20 lg:py-20">
      {Object.entries(sectionsConfig).map(([key, section]) => {
        const Component = sectionComponents[key as TSectionKeys];
        const title = section.showTitle ? section.title : undefined;

        return (
          <SectionLayout key={section.id} id={section.id} title={title}>
            <Component />
          </SectionLayout>
        );
      })}
    </main>
  );
};
