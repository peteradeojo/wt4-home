import { WorldStar } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";

export function Welcome() {
  return <Layout resources={resources} title="Whatthefour.com" />;
}

const resources: Resource[] = [
  {
    href: "/red",
    text: "R E D",
    textColor: "text-red-500",
    blank: false,
    icon: <WorldStar />,
  },
  {
    href: "/sloppyseconds",
    text: "Sloppy Seconds",
    textColor: "text-green-500",
    blank: false,
    icon: <WorldStar />,
  },
];
