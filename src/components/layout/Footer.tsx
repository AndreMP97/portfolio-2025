import { IconLink, TIconLinkProps } from "components/iconLink";

export type TFooterProps = {
  /**
   * The icons to display in the footer
   * @optional
   */
  icons?: TIconLinkProps[];
  /**
   * The name to display in the footer
   * @requires
   */
  name: string;
};

export const Footer: React.FC<TFooterProps> = ({ icons, name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-space-blue flex flex-1 flex-col justify-center border-t border-solid">
      <div className="@container flex flex-col items-center gap-8 px-5 py-12 text-center">
        {icons?.map((icon) => <IconLink {...icon} />)}
        <p className="text-lavender-blue text-lg leading-normal font-normal">
          © {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
