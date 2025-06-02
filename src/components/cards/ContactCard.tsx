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
    <div className="mx-auto flex flex-col gap-8">
      <div className="border-space-blue bg-midnight-navy hover:border-aqua-mint rounded-lg border p-8 shadow-xl transition-colors duration-300">
        <h2 className="mb-6 text-center text-3xl leading-tight font-bold tracking-tight text-white">
          {title}
        </h2>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-lavender-blue max-w-2xl text-lg leading-relaxed font-normal">
            {description}
          </p>
          {buttons && (
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              {buttons.map((button) => (
                <ButtonLink {...button} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
