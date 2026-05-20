import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import target from "~/assets/target-removebg.png";
import About from "~/routes/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "RED" },
    { name: "description", content: "RED, RISK EVEN DEATH, RED is a lifestyle brand that highlights the dog eat dog and survival nature of society. Focusing on art as a medium of escaping and overcoming the construct . The brand carries a serious energy, expressed through raw and grungy imagery and design language." },
  ];
}

export default function Home() {
  return <>

    <div className="flex flex-col md:px-32 md:min-h-[800px]">
      <div>
        <img src={target} className="w-75 m-auto" />
      </div>

      <About />

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
