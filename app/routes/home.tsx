import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import target from "~/assets/target-removebg.png";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Whatthefour.com" },
    { name: "description", content: "Whatthefour.com" },
  ];
}

export default function Home() {
  return <>

    <div className="flex flex-col md:px-32 md:h-[800px] overflow-hidden">
      <div>
        <img src={target} className="m-auto" />

      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 ">

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
    </div>
  </>
}
