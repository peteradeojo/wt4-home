import { useMatch, useMatches, useNavigate } from "react-router";
import { Instagram, Twitter } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";

const resources: Resource[] = [
  {
    text: "Twitter (X)",
    icon: <Twitter />,
    href: "https://x.com/_2svintage",
  },
  {
    text: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/_2svintage",
  },
];

export default function SloppySecs() {
  return <Layout resources={resources} title="Sloppy Seconds" />;
}
