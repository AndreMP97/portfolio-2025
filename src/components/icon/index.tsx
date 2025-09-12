// Auto-generated file - do not edit manually
import { TIconName, TIconProps } from "./types";

import IoBriefcaseIcon from "@assets/icons/IoBriefcase.svg?react";
import IoCodeSlashOutlineIcon from "@assets/icons/IoCodeSlashOutline.svg?react";
import IoGitMergeOutlineIcon from "@assets/icons/IoGitMergeOutline.svg?react";
import IoHammerIcon from "@assets/icons/IoHammer.svg?react";
import IoLogoGithubIcon from "@assets/icons/IoLogoGithub.svg?react";
import IoLogoLinkedinIcon from "@assets/icons/IoLogoLinkedin.svg?react";
import IoLogoReactIcon from "@assets/icons/IoLogoReact.svg?react";
import IoPaperPlaneIcon from "@assets/icons/IoPaperPlane.svg?react";
import IoPhonePortraitOutlineIcon from "@assets/icons/IoPhonePortraitOutline.svg?react";
import IoRibbonIcon from "@assets/icons/IoRibbon.svg?react";
import IoSchoolIcon from "@assets/icons/IoSchool.svg?react";
import IoSpeedometerIcon from "@assets/icons/IoSpeedometer.svg?react";

const iconMap: Record<
  TIconName,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  IoBriefcase: IoBriefcaseIcon,
  IoCodeSlashOutline: IoCodeSlashOutlineIcon,
  IoGitMergeOutline: IoGitMergeOutlineIcon,
  IoHammer: IoHammerIcon,
  IoLogoGithub: IoLogoGithubIcon,
  IoLogoLinkedin: IoLogoLinkedinIcon,
  IoLogoReact: IoLogoReactIcon,
  IoPaperPlane: IoPaperPlaneIcon,
  IoPhonePortraitOutline: IoPhonePortraitOutlineIcon,
  IoRibbon: IoRibbonIcon,
  IoSchool: IoSchoolIcon,
  IoSpeedometer: IoSpeedometerIcon,
} as const;

export const Icon: React.FC<TIconProps> = ({
  iconName,
  size = 28,
  color = "currentColor",
  className = "",
  ...props
}) => {
  const Icon = iconMap[iconName];

  return (
    <Icon
      {...props}
      className={`shrink-0 ${className}`.trim()}
      fill={color}
      height={size}
      width={size}
    />
  );
};
