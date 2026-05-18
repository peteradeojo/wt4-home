import { BsTools } from "react-icons/bs";
import { WorldStar } from "~/components/icons";
import Layout from "~/components/layout";
import type { Resource } from "~/types";
import redCamo from "~/assets/red-camo (1).png";
import target from "~/assets/target.svg";
import { Link } from "react-router";

export function Welcome() {
  return <>
    {/* <span className="glass-panel inline-block">
      <img src={redCamo} alt="" />
    </span> */}

    <div className="sticky top-0">
      <nav className="flex justify-end">
        <Link to={'/'} className="nav-item">Home</Link>
        <Link to={'/'} className="nav-item">About</Link>
        <Link to={'/'} className="nav-item">My account</Link>
      </nav>
    </div>

    {/* <img src={target} alt="" className="max-w-full" /> */}

    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 md:px-32 md:h-[800px] overflow-hidden">
      <Link to={'/'} className="glass-panel p-4 flex flex-col gap-y-4 w-full md:w-1/3">
        {/* <img src={redCamo} /> */}
        <p className="uppercase font-bold text-center py-2 text-2xl">Events</p>
      </Link>
      <Link to={'/'} className="glass-panel p-4 flex flex-col gap-y-4 w-full md:w-1/3">
        {/* <img src={redCamo} /> */}
        <p className="uppercase font-bold text-center py-2 text-2xl">Fashion</p>
      </Link>
      <Link to={'/'} className="glass-panel p-4 flex flex-col gap-y-4 w-full md:w-1/3">
        {/* <img src={redCamo} /> */}
        <p className="uppercase font-bold text-center py-2 text-2xl">Music</p>
      </Link>
    </div>
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
