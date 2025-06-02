// Icons
import { ButtonLink, TButtonLinkProps } from "components/buttonLink";

export type TContactCardProps = {
  /**
   * The contact card buttons
   * @requires
   */
  buttons?: TButtonLinkProps[];
  /**
   * The contact card description
   * @requires
   */
  description: string;
  /**
   * The contact card title
   * @requires
   */
  title: string;
};

export const ContactCard: React.FC<TContactCardProps> = ({
  buttons,
  description,
  title,
}) => {
  return (
    <div className="border-space-blue bg-midnight-navy hover:border-aqua-mint mx-auto flex flex-col gap-6 rounded-lg border p-8 shadow-xl transition-colors duration-300">
      <h2 className="text-center text-3xl leading-tight font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-lavender-blue max-w-2xl text-lg leading-relaxed font-normal whitespace-break-spaces">
          {description}
        </p>
        {buttons && (
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-8">
            {buttons.map((button) => (
              <ButtonLink {...button} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
