export type TSectionLayoutProps = {
  /**
   * Content to be displayed inside the sectioni
   */
  children: React.ReactNode;
  /**
   * The section id
   * @requires
   */
  id: string;
  /**
   * The section id
   * @requires
   */
  title: string;
};

export const SectionLayout: React.FC<TSectionLayoutProps> = ({
  id,
  title,
  children,
}) => {
  return (
    <section className="flex scroll-mt-24 flex-col gap-6" id={id}>
      <h2 className="text-3xl leading-tight font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="w-full md:px-4">{children}</div>
    </section>
  );
};
