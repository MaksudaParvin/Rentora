import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    role: "TENANT",
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
      await registerUser(formData);
      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      setError("Registration Failed!");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome to Rentora
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="role"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="TENANT">Tenant</option>
            <option value="LANDLORD">Landlord</option>
            <option value="PROPERTY_MANAGER">Property Manager</option>
          </select>

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
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;