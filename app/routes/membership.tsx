import type { Route } from "../+types/root";
// import cache from "~/utils/cache";
import target from "~/assets/target.svg";
import redCamo from "~/assets/red-camo (1).png";
import { BackLink } from "~/components/icons";
import { Form } from "react-router";
import { transport } from "~/utils";

// export const loader = async ({ request, params }: Route.LoaderArgs) => {
// cache.incr("wt4:trip_redirects");

// const event = {
//   ip: (
//     request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip")
//   )
//     ?.split(",")[0]
//     .trim(),
//   userAgent: request.headers.get("user-agent"),
//   country: request.headers.get("x-vercel-ip-country"),
//   city: request.headers.get("x-vercel-ip-city"),
//   pathname: new URL(request.url).pathname,
//   referrer: request.headers.get("referer"),
//   timestamp: new Date().toISOString(),
// };
// cache.lpush("wt4:interactions", JSON.stringify(event));
// return { event };
//   return {};
// };

export default function Membership({ actionData }: Route.ComponentProps) {
  return (
    <div className="container text-center grid gap-y-8">
      <BackLink label="Home" to="/" />
      <div className="w-full">
        <img src={target} className="max-w-30 m-auto" />
      </div>

      <p>If you're reading this</p>
      <p>This is your invitation to join the RED militia.</p>
      <Form method="post" action="/red/membership" className="m-auto">
        <div className="flex">
          <input
            type="email"
            name="email"
            className="p-1 bg-gray-200 dark:bg-gray-800 dark:border-none border-r-none rounded-sm rounded-r-none sm:w-100"
            placeholder="Your email address"
          />
          <button
            type="submit"
            className="bg-red-500 text-white p-2 px-4 rounded-sm rounded-l-none"
          >
            Enlist
          </button>
        </div>
        {actionData?.accepted && (
          <p className="text-green-500 text-sm mt-2">Enlistment successful. We'll be in touch.</p>
        )}
      </Form>
      <img src={redCamo} className="m-auto max-w-full" />
    </div>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");

  const r = await transport.sendMail({
    to: ["adeojopeter@gmail.com", "iamchxrlz@gmail.com", "jesutoilugbo@gmail.com"],
    subject: "New RED militia enlistment",
    html: `<p>New enlistment with email: ${email}</p>`,
    from: "RED Militia <internal@whatthefour.com>",
  });

  return { accepted: r.accepted.length > 0 };
}
