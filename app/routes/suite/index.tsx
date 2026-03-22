import { Link, Outlet, useMatch } from "react-router";
import { BackLink } from "~/components/icons";

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
              {projects.map(({ text, href, description }, i) => (
                <Link to={href} className="card" key={i}>
                  {text}
                </Link>
              ))}
            </div>
          ) : (
            <>
              <BackLink />
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

const projects = [
  {
    text: "QR Generator",
    href: "/suite/qr",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nisi fuga perspiciatis voluptatum quis nemo itaque, excepturi sapiente accusantium ratione repudiandae fugit impedit blanditiis culpa? Ipsa ex porro cum at.",
  },
];
