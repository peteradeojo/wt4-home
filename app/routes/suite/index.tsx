import { BsQrCode } from "react-icons/bs";
import { Link, Outlet, useMatch } from "react-router";
import { BackLink } from "~/components/icons";

type TSuiteItem = {
  text: string;
  href: string;
  description: string;
  icon: React.JSX.Element;
};

const SuiteItem = ({ config }: { config: TSuiteItem }) => {
  return (
    <>
      <Link to={config.href} className="card">
        {config.icon}
        <span className="uppercase font-semibold">{config.text}</span>
      </Link>
    </>
  );
};

const Suite = () => {
  const match = useMatch("/suite");

  return (
    <>
      <nav className="flex p-2 justify-between">
        <Link
          to={"/"}
          className="px-4 py-2 rounded hover:bg-gray-900 duration-200"
        >
          Home
        </Link>
      </nav>

      <main className="container">
        <section id="suite">
          {match !== null ? (
            <div className="grid gap-9 sm:grid-cols-3 md:grid-cols-6 w-full">
              {projects.map((data, i) => (
                <SuiteItem config={data} key={i} />
              ))}
            </div>
          ) : (
            <>
              <BackLink to={"/suite"} />
              <Outlet />
            </>
          )}
        </section>
      </main>
    </>
  );
};

export const loader = async () => {
  return {};
};

export default Suite;

const projects: TSuiteItem[] = [
  {
    text: "QR Generator",
    href: "/suite/qr",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nisi fuga perspiciatis voluptatum quis nemo itaque, excepturi sapiente accusantium ratione repudiandae fugit impedit blanditiis culpa? Ipsa ex porro cum at.",
    icon: (
      <span className="w-full flex items-center justify-center">
        <BsQrCode className="text-8xl" />
      </span>
    ),
  },
];
