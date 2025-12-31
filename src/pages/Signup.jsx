import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Import the useAuth hook

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signUpNewUser, loading, error: authError } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const result = await signUpNewUser(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(authError || result.error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <form onSubmit={handleSignUp} className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Sign up today!</h2>

          <div className="flex flex-col space-y-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-gray-500 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-gray-500 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-br p-3 rounded-2xl from-yellow-500 to-orange-600 text-white shadow-lg ring-2 ring-yellow-400 hover:ring-yellow-500 disabled:opacity-50"
          >
            Sign Up
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:text-orange-700">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
