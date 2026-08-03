import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <Link
                    to="/"
                    className="text-3xl font-bold text-blue-500"
                >
                    Rentora
                </Link>

                <div className="flex items-center gap-8">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 font-semibold"
                                : "hover:text-blue-400"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 font-semibold"
                                : "hover:text-blue-400"
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 font-semibold"
                                : "hover:text-blue-400"
                        }
                    >
                        Register
                    </NavLink>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;