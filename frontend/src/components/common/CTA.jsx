import { Link } from "react-router-dom";

function CTA() {

    return (

        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100">

            <div className="max-w-5xl mx-auto text-center px-6">

                <h2 className="text-5xl font-bold text-gray-900">

                    Ready to Manage Your Properties?

                </h2>

                <p className="text-gray-600 text-lg mt-6">

                    Join Rentora today and simplify your rental business.

                </p>

                <Link
                    to="/register"
                    className="inline-block mt-10 bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition"
                >
                    Create Free Account
                </Link>

            </div>

        </section>

    );

}

export default CTA;