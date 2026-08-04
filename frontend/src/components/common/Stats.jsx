import {
    FaBuilding,
    FaUsers,
    FaMoneyBillWave,
    FaChartLine,
} from "react-icons/fa";

function Stats() {

    const stats = [
        {
            icon: <FaBuilding />,
            number: "500+",
            title: "Properties"
        },
        {
            icon: <FaUsers />,
            number: "1,200+",
            title: "Happy Tenants"
        },
        {
            icon: <FaMoneyBillWave />,
            number: "$2.5M",
            title: "Rent Collected"
        },
        {
            icon: <FaChartLine />,
            number: "99%",
            title: "Success Rate"
        },
    ];

    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition text-center"
                        >

                            <div className="text-4xl text-blue-600 flex justify-center mb-5">
                                {item.icon}
                            </div>

                            <h2 className="text-4xl font-bold">
                                {item.number}
                            </h2>

                            <p className="text-gray-500 mt-3">
                                {item.title}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Stats;