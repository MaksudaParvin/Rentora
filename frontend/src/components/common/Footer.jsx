import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="bg-slate-900 text-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        Rentora

                    </h2>

                    <p className="mt-5 leading-7">

                        Smart Rental & Property Management Platform.

                    </p>

                </div>

                <div>

                    <h3 className="text-xl font-semibold text-white mb-5">

                        Company

                    </h3>

                    <ul className="space-y-3">

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>

                    </ul>

                </div>

                <div>

                    <h3 className="text-xl font-semibold text-white mb-5">

                        Account

                    </h3>

                    <ul className="space-y-3">

                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>

                    </ul>

                </div>

                <div>

                    <h3 className="text-xl font-semibold text-white mb-5">

                        Follow Us

                    </h3>

                    <div className="flex gap-5 text-2xl">

                        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                        <FaGithub className="hover:text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />

                    </div>

                </div>

            </div>

            <div className="border-t border-slate-700 py-6 text-center text-sm">

                © 2026 Rentora. All Rights Reserved.

            </div>

        </footer>

    );

}

export default Footer;