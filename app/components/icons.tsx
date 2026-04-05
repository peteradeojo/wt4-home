import { Link } from "react-router";

export const WorldStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-world-star"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 12a9 9 0 1 0 -9.968 8.948" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h6.4" />
    <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
    <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
  </svg>
);

export const Twitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x stroke-black fill-white dark:stroke-white dark:fill-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export const Instagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram stroke-black fill-white dark:stroke-white dark:fill-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M16.5 7.5v.01" />
  </svg>
);

export const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-to-arc stroke-black dark:stroke-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 12h-12" />
    <path d="M13 16l-4 -4l4 -4" />
    <path d="M12 3a9 9 0 1 0 0 18" />
  </svg>
);

export const BackLink = ({ to = undefined, label = undefined }: { to?: string, label?: string }) => (
  <>
    {to ? (
      <Link
        to={to}
        className={`group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500 cursor-pointer`}
      >
        <BackIcon />
        {label || "Go Back"}
      </Link>
    ) : (
      <span
        onClick={() => history.back()}
        className={`group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500 cursor-pointer`}
      >
        <BackIcon />
        {label || "Go Back"}
      </span>
    )}
  </>
);
