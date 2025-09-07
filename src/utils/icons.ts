import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";

export type TIconName = keyof typeof FaIcons;

export const iconMap = FaIcons as Record<TIconName, IconType>;
