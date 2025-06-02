export type TTagProps = {
  /**
   * The tag description
   * @requires
   */
  description: string;
};

export const Tag: React.FC<TTagProps> = ({ description }) => {
  return (
    <span className="text-aqua-mint bg-charcoal-navy rounded-full px-2.5 py-0.5 text-xs font-semibold">
      {description}
    </span>
  );
};
