import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
    setInitializing(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock authentication - replace with real auth
      const userData = { 
        email, 
        name: email.split('@')[0],
        id: Date.now().toString()
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Navigate to home after successful login
      navigate("/");
      
      return { success: true, user: userData };
    } catch (err) {
      setError("An unexpected error occurred.");
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock signup - replace with real auth
      const userData = { 
        email, 
        name: email.split('@')[0],
        id: Date.now().toString()
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Navigate to home after successful signup
      navigate("/");
      
      return { success: true, user: userData };
    } catch (err) {
      setError("An unexpected error occurred.");
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate("/login");
  };

  const value = {
    user,
    error,
    loading,
    initializing,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}