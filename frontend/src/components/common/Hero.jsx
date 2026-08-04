import { Link } from "react-router-dom";
import { FaArrowRight, FaCompass  } from "react-icons/fa";

function Hero() {
    return (
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">

            <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}

                <div>

                    <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
                        🚀 Smart Rental Management Platform
                    </span>

                    <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">

                        Manage Your

                        <span className="text-blue-600">
                            {" "}Properties
                        </span>

                        <br />

                        Smarter, Faster & Easier

                    </h1>

                    <p className="mt-8 text-lg leading-8 text-gray-600">

                        Rentora helps landlords, tenants and property managers
                        manage properties, rent collection, leases, maintenance,
                        payments and tenants from one modern dashboard.

                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">

                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
                        >
                            Create Free Account

                            <FaArrowRight />
                        </Link>

                        <a
                            href="#features"
                            className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
                        >
                            <FaCompass />

                            Explore Features
                        </a>

                    </div>

                    <div className="flex gap-12 mt-14">

                        <div>

                            <h2 className="text-3xl font-bold text-blue-600">

                                500+

                            </h2>

                            <p className="text-gray-500">

                                Properties

                            </p>

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold text-green-600">

                                1200+

                            </h2>

                            <p className="text-gray-500">

                                Tenants

                            </p>

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold text-purple-600">

                                99%

                            </h2>

                            <p className="text-gray-500">

                                Satisfaction

                            </p>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="relative">

                    <div className="bg-white rounded-3xl shadow-2xl p-8">

                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80"
                            alt="Rentora Dashboard"
                            className="rounded-2xl"
                        />

                    </div>

                    <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-5">

                        <p className="text-sm text-gray-500">

                            Monthly Revenue

                        </p>

                        <h3 className="text-2xl font-bold text-green-600">

                            $24,850

                        </h3>

                    </div>

                    <div className="absolute -top-8 -right-6 bg-blue-600 text-white rounded-2xl shadow-xl p-5">

                        <h3 className="text-2xl font-bold">

                            98%

                        </h3>

                        <p className="text-sm">

                            Occupancy Rate

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;