import { Instagram, Twitter, WorldStar } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";
import target from "~/assets/target.svg";

export default function Red() {
  return (
    <Layout
      resources={resources}
      title={<img src={target} className="w-20 m-auto" />}
    />
  );
}

const resources: Resource[] = [
  {
    text: "Enlist",
    href: "/red/membership",
    icon: <WorldStar />,
    textColor: "text-red-500",
    blank: false,
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
