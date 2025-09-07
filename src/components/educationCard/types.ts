export const educationCardType = {
  certificate: "certificate",
  university: "university",
} as const;

export type TEducationCardType = keyof typeof educationCardType;
