import {
    FaShieldAlt,
    FaClock,
    FaChartLine,
    FaHeadset,
} from "react-icons/fa";

function WhyChoose() {

    const items = [

        {
            icon: <FaShieldAlt />,
            title: "Secure Platform",
            description:
                "Your property and tenant information is protected with modern security."
        },

        {
            icon: <FaClock />,
            title: "Save Time",
            description:
                "Automate daily rental management tasks and reduce manual work."
        },

        {
            icon: <FaChartLine />,
            title: "Business Insights",
            description:
                "Track occupancy, payments and rental performance from one dashboard."
        },

        {
            icon: <FaHeadset />,
            title: "Easy to Use",
            description:
                "Simple interface designed for landlords, tenants and property managers."
        }

    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold">

                        Why Choose Rentora?

                    </h2>

                    <p className="mt-5 text-lg text-gray-600">

                        Everything you need to manage your rental business efficiently.

                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {

                        items.map((item, index) => (

                            <div
                                key={index}
                                className="text-center bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition"
                            >

                                <div className="text-5xl text-blue-600 flex justify-center mb-6">

                                    {item.icon}

                                </div>

                                <h3 className="text-2xl font-bold">

                                    {item.title}

                                </h3>

                                <p className="text-gray-600 mt-4 leading-7">

                                    {item.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );
}

export default WhyChoose;