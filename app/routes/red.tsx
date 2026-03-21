import { Link } from "react-router";
import { Instagram, Twitter, WorldStar } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";

export default function Red() {
  return <Layout resources={resources} title="R E D" />;
}

const resources: Resource[] = [
  {
    text: "TRIP Party",
    href: "https://tix.africa/discover/takeatrip",
    icon: <WorldStar />,
    textColor: "text-red-500",
  },
  {
    href: "https://x.com/wear3red",
    text: "Twitter (X)",
    icon: <Twitter />,
  },
  {
    href: "https://www.instagram.com/wear3red",
    text: "Instagram",
    icon: <Instagram />,
  },
];
