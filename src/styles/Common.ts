import { thems } from "./Thems";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontPropsType) => `
  font-family: ${family || "Epilogue"}, sans-serif;
  font-weight: ${weight || 400};
  color: ${color || thems.colors.text.title};
  line-height: ${lineHeight || 1.2};
  font-size: clamp(${Fmin || 15}px, calc( (100vw - 375px)/(1440 - 375) * (${
  Fmax || 20
} - ${Fmin || 15}) + ${Fmin || 15}px), ${Fmax || 20}px);
`;
