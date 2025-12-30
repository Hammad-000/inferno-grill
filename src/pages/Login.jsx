import { i } from "motion/react-client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate


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
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
