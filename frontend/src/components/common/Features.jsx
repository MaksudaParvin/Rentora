import {
    FaHome,
    FaUserFriends,
    FaFileContract,
    FaWallet,
    FaTools,
    FaBell,
} from "react-icons/fa";

function Features() {

    const features = [

        {
            icon: <FaHome />,
            title: "Property Management",
            description:
                "Manage apartments, houses and commercial properties from one dashboard."
        },

        {
            icon: <FaUserFriends />,
            title: "Tenant Management",
            description:
                "Store tenant information, documents and communication history."
        },

        {
            icon: <FaFileContract />,
            title: "Lease Management",
            description:
                "Create and manage rental agreements digitally."
        },

        {
            icon: <FaWallet />,
            title: "Payment Tracking",
            description:
                "Track rent payments and outstanding balances."
        },

        {
            icon: <FaTools />,
            title: "Maintenance Requests",
            description:
                "Receive and manage maintenance requests efficiently."
        },

        {
            icon: <FaBell />,
            title: "Notifications",
            description:
                "Stay updated with reminders and important alerts."
        },

    ];

    return (

        <section id="features" className="py-24 bg-slate-100">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold">

                        Everything You Need

                    </h2>

                    <p className="text-gray-600 mt-5 text-lg">

                        A complete rental management platform for landlords,
                        tenants and property managers.

                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
                        >

                            <div className="text-blue-600 text-5xl mb-6">

                                {item.icon}

                            </div>

                            <h3 className="text-2xl font-bold mb-4">

                                {item.title}

                            </h3>

                            <p className="text-gray-600 leading-7">

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Features;