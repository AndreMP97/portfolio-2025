import { Tag } from "components/tag";

export type TProjectCardProps = {
  /**
   * The project card description
   * @requires
   */
  description: string;
  /**
   * The project card image
   * @requires
   */
  image: string;
  /**
   * The project card url
   * @requires
   */
  url?: string;
  /**
   * The project card tags
   * @requires
   */
  tags?: string[];
  /**
   * The project card title
   * @requires
   */
  title: string;
};

export const ProjectCard: React.FC<TProjectCardProps> = ({
  description,
  image,
  url,
  tags,
  title,
}) => {
  const Wrapper = url ? "a" : "div";

  return (
    <Wrapper
      {...(url
        ? { href: url, rel: "noopener noreferrer", target: "_blank" }
        : {})}
      className={`group flex flex-col gap-4`}
    >
      <img
        className="aspect-video w-full transform overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-lg transition-transform duration-300 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <div>
        <h3 className="group-hover:text-aqua-mint text-xl leading-normal font-semibold text-white">
          {title}
        </h3>
        <p className="text-lavender-blue mt-2 text-base leading-relaxed font-normal">
          {description}
        </p>
      </div>
      {!!tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={`tag-${index}`} description={tag} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};
