// src/pages/Signup.jsx
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
      navigate("/dashboard"); // Navigate to dashboard on success
    } else {
      setError(authError || result.error.message); // Show error message on failure
    }
  };

  return (
    <div>
        <div  className="">

      <form onSubmit={handleSignUp} className="lex items-center justify-center py-10 px-4 mt-35 mb-8">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            />
        </div>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            />
        </div>
        <button type="submit" disabled={loading} className="bg-gradient-to-br p-3 rounded-2xl from-yellow-500 to-orange-600 text-white shadow-lg ring-2 ring-yellow-400">
          Sign Up
        </button>
        {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </form>
    </div>
            </div>
  );
};

export default Signup;
