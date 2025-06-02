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
   * The section title
   * @optional
   */
  title?: string;
};

export const SectionLayout: React.FC<TSectionLayoutProps> = ({
  id,
  title,
  children,
}) => {
  return (
    <section className="flex scroll-mt-24 flex-col gap-6" id={id}>
      {title && (
        <h2 className="text-center text-3xl leading-tight font-bold tracking-tight text-white md:text-left">
          {title}
        </h2>
      )}
      <div className="section-container">{children}</div>
    </section>
  );
};
