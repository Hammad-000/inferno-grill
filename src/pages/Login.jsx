import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "admin@123" && password === "12345") {
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <form onSubmit={handleLogin} className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-gray-500 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-gray-500 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-br p-3 rounded-2xl from-yellow-500 to-orange-600 text-white shadow-lg ring-2 ring-yellow-400 hover:ring-yellow-500 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}
            <p className="text-center">
            Already have an account?{" "}
            <Link to="/signup" className="text-orange-600 hover:text-orange-700">
              Signup
            </Link>
          </p>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
