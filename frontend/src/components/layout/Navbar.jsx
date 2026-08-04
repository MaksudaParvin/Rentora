import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600 transition";

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">

            <div className="max-w-7xl mx-auto px-6">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight"
                    >
                        <span className="text-blue-600">Rent</span>
                        <span className="text-gray-900">ora</span>
                    </Link>

                    {/* Desktop Menu */}

                    <nav className="hidden lg:flex items-center gap-8">

                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/" className={navLinkClass}>
                            Features
                        </NavLink>

                        <NavLink to="/" className={navLinkClass}>
                            About
                        </NavLink>

                        <NavLink to="/" className={navLinkClass}>
                            Contact
                        </NavLink>

                    </nav>

                    {/* Right Buttons */}

                    <div className="hidden lg:flex items-center gap-4">

                        <Link
                            to="/register"
                            className="font-medium text-gray-700 hover:text-blue-600 transition"
                        >
                            Register
                        </Link>

                        <Link
                            to="/login"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-3 transition"
                        >
                            Login
                        </Link>

                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-3xl text-gray-700"
                    >
                        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}

            {menuOpen && (

                <div className="lg:hidden border-t bg-white">

                    <div className="flex flex-col px-6 py-5 space-y-5">

                        <NavLink
                            to="/"
                            className={navLinkClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/"
                            className={navLinkClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            Features
                        </NavLink>

                        <NavLink
                            to="/"
                            className={navLinkClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/"
                            className={navLinkClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </NavLink>

                        <hr />

                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700"
                        >
                            Register
                        </Link>

                    </div>

                </div>

            )}

        </header>
    );
}

export default Navbar;