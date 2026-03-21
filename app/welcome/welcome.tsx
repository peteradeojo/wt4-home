import { Link } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { WorldStar } from "~/components/icons";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-75 w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-black dark:text-gray-200 text-center">
              Whatthefour.com
            </p>
            <ul>
              {resources.map(({ href, text, icon, textColor, blank }) => (
                <li key={href}>
                  {blank !== false ? (
                    <>
                      <a
                        className={`group flex items-center gap-3 self-stretch p-3 leading-normal ${textColor || "text-blue-700"} hover:underline dark:${textColor || "text-blue-500"}`}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                        {text}
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        to={href}
                        className={`group flex items-center gap-3 self-stretch p-3 leading-normal ${textColor || "text-blue-700"} hover:underline dark:${textColor || "text-blue-500"}`}
                      >
                        {icon}
                        {text}
                      </Link>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
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
