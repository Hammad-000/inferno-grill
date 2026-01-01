import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Simple signup function (no AuthContext dependency)
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validation
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    
    try {
      // Simple signup logic (stores in localStorage)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user exists
      if (users.find(user => user.email === email)) {
        setError("User already exists with this email");
        setLoading(false);
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        email,
        password, // In real app, hash this!
        name: email.split('@')[0],
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Also store auth data
      const userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };
      
      localStorage.setItem('authToken', 'token-' + newUser.id);
      localStorage.setItem('userData', JSON.stringify(userData));

      // Success! Redirect to home
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);

    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const handleDemoSignup = () => {
    setEmail("demo@example.com");
    setPassword("demo123");
    setConfirmPassword("demo123");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/90 to-orange-600/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 w-full flex flex-col justify-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4">
                <FaUtensils className="text-amber-700 text-3xl" />
              </div>
              <h1 className="text-4xl font-bold">
                Inferno<span className="text-amber-200">Grill</span>
              </h1>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Join Our <span className="text-amber-200">Flavor Family</span>
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Create an account to unlock exclusive benefits, faster checkout, 
              and personalized recommendations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎁</span>
                </div>
                <div>
                  <h4 className="font-bold">Welcome Offer</h4>
                  <p className="text-sm text-amber-100">Get 25% off your first order</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold">Fast Checkout</h4>
                  <p className="text-sm text-amber-100">Save your details for quicker orders</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <h4 className="font-bold">Loyalty Rewards</h4>
                  <p className="text-sm text-amber-100">Earn points with every purchase</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex items-center">
              <div className="bg-amber-700 p-3 rounded-full mr-4">
                <FaUtensils className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
               Inferno<span className="text-amber-600">Grill</span>
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-amber-100">Just email and password needed</p>
            </div>

            {/* Form Body */}
            <div className="p-8">
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-500">!</span>
                    </div>
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSignUp} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <FaEnvelope className="mr-2 text-amber-600" />
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                      required
                      disabled={loading}
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <FaLock className="mr-2 text-amber-600" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-4 pl-12 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="At least 6 characters"
                      required
                      disabled={loading}
                    />
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <FaLock className="mr-2 text-amber-600" />
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full p-4 pl-12 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="Confirm your password"
                      required
                      disabled={loading}
                    />
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Terms Agreement */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 mt-1"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="/terms" className="text-amber-600 hover:text-amber-700 font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-amber-600 hover:text-amber-700 font-medium">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                {/* Signup Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg transform hover:-translate-y-1"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>

                {/* Demo Signup Button */}
                <button
                  type="button"
                  onClick={handleDemoSignup}
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-bold hover:from-gray-200 hover:to-gray-300 transition-all duration-300"
                >
                  Use Demo Details
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-4 text-sm text-gray-500">Already have an account?</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center w-full py-3 px-6 border-2 border-amber-500 text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition-all duration-300"
                >
                  Sign In Instead
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;