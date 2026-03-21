import { Link, useMatch } from "react-router";
import type { Resource } from "~/types";

export default function Layout({
  resources,
  title,
}: {
  resources: Resource[];
  title?: string;
}) {
  const match = useMatch("/");
  console.log(match);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-75 w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-black dark:text-gray-200 text-center">
              {title}
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

              {match == null && (
                <li>
                  <span
                    onClick={() => history.back()}
                    className={`group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500 cursor-pointer`}
                  >
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-to-arc stroke-black dark:stroke-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 12h-12" />
                      <path d="M13 16l-4 -4l4 -4" />
                      <path d="M12 3a9 9 0 1 0 0 18" />
                    </svg>
                    Go Back
                  </span>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
