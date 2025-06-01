// Components
import sectionComponents from "@sections";
import { SectionLayout } from "components/sectionLayout";

// Constants
import { sections, TSectionKeys } from "constants/sections";

export const PageLayout: React.FC = () => {
  return (
    <main className="mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col justify-center gap-16 px-10 py-12 lg:px-0">
      {Object.entries(sections).map(([key, section]) => {
        const Component = sectionComponents[key as TSectionKeys];

        if (section.wrapInLayout) {
          return (
            <SectionLayout
              key={section.id}
              id={section.id}
              title={section.title}
            >
              <Component />
            </SectionLayout>
          );
        }

        return (
          <section key={section.id} id={section.id}>
            <Component />
          </section>
        );
      })}
    </main>
  );
};
