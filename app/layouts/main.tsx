import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { Link, Outlet } from "react-router";

export default function Layout() {
    return <>
        <div className="bg-black/70 min-h-dvh ">

            <div className="sticky top-0 z-50">
                <nav className="flex justify-end text-white">
                    <Link to={'/'} className="nav-item">Home</Link>
                    {/* <Link to={'/about'} className="nav-item">About</Link> */}
                    <Link to={'/join'} className="nav-item">Join Us</Link>
                </nav>
            </div>
            <main className="py-8">
                <Outlet />

                <nav className="flex justify-center gap-x-8 text-2xl">
                    <a href={'//x.com/WEAR3RED'} target="_blank" className="nav-item">
                        <BsTwitterX />
                    </a>
                    <a href={'//instagram.com/wear3red'} target="_blank" className="nav-item">
                        <BsInstagram />
                    </a>
                </nav>
            </main>
        </div>
    </>
}
