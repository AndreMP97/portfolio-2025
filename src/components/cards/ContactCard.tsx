// Icons
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export type TEducationCardProps = {
  /**
   * The contact card description
   * @requires
   */
  description: string;
  /**
   * The contact card description
   * @requires
   */
  email: string;
  /**
   * The contact card description
   * @requires
   */
  linkedin: string;
  /**
   * The contact card title
   * @requires
   */
  title: string;
};

export const ContactCard: React.FC<TEducationCardProps> = ({
  description,
  email,
  linkedin,
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
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <a
              className="border-aqua-mint text-aqua-mint hover:bg-bright-aqua hover:text-navy-blue flex items-center justify-center gap-4 rounded-md border px-7 py-4 text-lg leading-normal font-medium transition-colors"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              className="border-aqua-mint text-aqua-mint hover:bg-bright-aqua hover:text-navy-blue flex items-center justify-center gap-4 rounded-md border px-7 py-4 text-lg leading-normal font-medium transition-colors"
              href={`mailto:${email}`}
            >
              <FaEnvelope size={28} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
