import type { Route } from "../+types/root";
import { redirect } from "react-router";
import { cache } from "~/utils";

export const loader = async ({ request, params }: Route.LoaderArgs) => {
  cache.incr("wt4:trip_redirects");

  const event = {
    ip: (
      request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip")
    )
      ?.split(",")[0]
      .trim(),
    userAgent: request.headers.get("user-agent"),
    country: request.headers.get("x-vercel-ip-country"),
    city: request.headers.get("x-vercel-ip-city"),
    pathname: new URL(request.url).pathname,
    referrer: request.headers.get("referer"),
    timestamp: new Date().toISOString(),
  };
  cache.lpush("wt4:interactions", JSON.stringify(event));
  return redirect("https://tix.africa/discover/takeatrip");
};

// export default function Membership() {
//   return <></>;
// }
