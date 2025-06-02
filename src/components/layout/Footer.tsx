import { IconLink, TIconLinkProps } from "components/iconLink";

export type TFooterProps = {
  /**
   * The icons to display in the footer
   * @default []
   */
  icons?: TIconLinkProps[];
  /**
   * The name to display in the footer
   */
  name: string;
};

export const Footer: React.FC<TFooterProps> = ({ icons = [], name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t-space-blue flex flex-1 flex-col justify-center border-t border-solid"
      aria-label="Site footer"
    >
      <div className="container-layout flex flex-col items-center gap-8 py-12 text-center">
        {icons.length > 0 &&
          icons.map((icon, index) => (
            <IconLink key={`icon-${index}`} {...icon} />
          ))}
        <p className="text-lavender-blue text-lg leading-normal font-normal">
          © {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
