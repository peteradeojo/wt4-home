import type { JSX } from "react";

export type Resource = {
  href: string;
  text: string;
  icon: JSX.Element;
  textColor?: string;
  blank?: false;
};
