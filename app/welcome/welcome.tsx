import { BsTools } from "react-icons/bs";
import { WorldStar } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";
import redCamo from "~/assets/red-camo (1).png";
import target from "~/assets/target.svg";
import { Link } from "react-router";

export function Welcome() {
  return <>
    {/* <img src={target} alt="" className="max-w-full" /> */}
  </>;
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
  {
    href: "/suite",
    text: "WT4 Suite",
    // textColor: "text-green-500",
    blank: false,
    icon: <BsTools />,
  },
];
