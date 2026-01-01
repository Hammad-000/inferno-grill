import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState('Logging out...');

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Show initial status
        setStatus('Clearing session data...');
        
        // Call logout function (synchronous in your case)
        logout();
        
        // Update status
        setStatus('Redirecting to login...');
        
        // Add a small delay for better UX
        setTimeout(() => {
          navigate('/login', { 
            replace: true,
            state: { message: 'You have been logged out successfully!' }
          });
        }, 1500);
        
      } catch (error) {
        console.error('Logout failed:', error);
        setStatus('Logout failed. Redirecting...');
        
        // Still navigate to login even if there's an error
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 2000);
      }
    };

    performLogout();
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {/* Animated Logo */}
        <div className="mb-8">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
            className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            </svg>
          </motion.div>
        </div>

        {/* Status Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Logging Out
          </h2>
          
          <div className="space-y-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full"
            />
            
            <p className="text-lg text-gray-600 mt-6">
              {status}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center space-x-4 mt-8">
            {['Security Check', 'Clearing Data', 'Redirecting'].map((step, index) => (
              <div key={step} className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  index === 0 ? 'bg-green-500 text-white' : 
                  index === 1 ? 'bg-amber-500 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {index < 2 ? '✓' : '3'}
                </div>
                <span className="text-xs text-gray-500">{step}</span>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex items-center justify-center space-x-2 text-amber-700 mb-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">You'll be redirected shortly</span>
            </div>
            <p className="text-sm text-amber-600">
              For security reasons, please close your browser if you're on a shared device.
            </p>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <div className="mt-12">
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                animate={{
                  y: ["0%", "-50%", "0%"],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: dot * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-gray-500">
          Gourmet<span className="font-semibold text-amber-600">Delight</span> • {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Logout;