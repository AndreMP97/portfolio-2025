import React from "react";

export type THeroCardProps = React.SVGProps<SVGSVGElement>;

export const HeroCard: React.FC<THeroCardProps> = ({ className, ...rest }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <defs>
      <pattern
        id="pattern-circles"
        patternUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <circle cx="20" cy="20" r="1.5" fill="#aqua-mint" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pattern-circles)" />
    <path
      d="M-100 300 Q 150 100 400 300 T 900 300"
      fill="none"
      opacity="0.3"
      stroke="#233554"
      strokeWidth={60}
    />
    <path
      d="M-100 400 Q 150 200 400 400 T 900 400"
      fill="none"
      opacity="0.2"
      stroke="#112240"
      strokeWidth={40}
    />
  </svg>
);
