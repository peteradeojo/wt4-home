import { Instagram, Twitter } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";

const resources: Resource[] = [
  {
    text: "Instagram",
    icon: <Instagram />,
    href: "",
  },
  {
    text: "Twitter (X)",
    icon: <Twitter />,
    href: "",
  },
];

export default function SloppySecs() {
  return <Layout resources={resources} title="Sloppy Seconds" />;
}
