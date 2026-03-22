import type { Route } from "../+types/root";
import { redirect } from "react-router";

export const loader = async (params: Route.LoaderArgs) => {
  return redirect("https://tix.africa/discover/takeatrip");
};

// export default function Membership() {
//   return <></>;
// }
