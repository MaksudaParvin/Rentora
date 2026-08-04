import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await loginUser(formData);

            alert("Login Successful!");

            navigate("/");
        } catch (err) {
            setError("Invalid email or password.");
            console.log(err);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back
                </h2>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Login to your Rentora account
                </p>

                {error && (
                    <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;