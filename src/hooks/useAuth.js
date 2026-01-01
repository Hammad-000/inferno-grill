// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  // Check for existing auth on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
    
    setInitializing(false);
  }, []);

  const signup = async (email, password) => {
    try {
      // Validate input
      if (!email || !password) {
        return { success: false, error: 'Email and password are required' };
      }

      if (password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters' };
      }

      // Check if user already exists (in localStorage for demo)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === email);
      
      if (existingUser) {
        return { success: false, error: 'User already exists with this email' };
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        email,
        password, // In real app, this should be hashed!
        name: email.split('@')[0],
        createdAt: new Date().toISOString()
      };

      // Save to localStorage (for demo)
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Generate auth data
      const authData = {
        token: 'mock-jwt-token-' + newUser.id,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          createdAt: newUser.createdAt
        }
      };

      // Store auth data
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('userData', JSON.stringify(authData.user));
      
      // Update state
      setUser(authData.user);

      // Navigate to home
      navigate('/');

      return { success: true, user: authData.user };
      
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: 'Signup failed. Please try again.' };
    }
  };

  const login = async (email, password) => {
    try {
      // Validate input
      if (!email || !password) {
        return { success: false, error: 'Email and password are required' };
      }

      // Check if user exists (in localStorage for demo)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        return { success: false, error: 'Invalid email or password' };
      }

      // Generate auth data
      const authData = {
        token: 'mock-jwt-token-' + user.id,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt
        }
      };

      // Store auth data
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('userData', JSON.stringify(authData.user));
      
      // Update state
      setUser(authData.user);

      // Navigate to home
      navigate('/');

      return { success: true, user: authData.user };
      
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    // Clear all auth-related data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Reset user state
    setUser(null);
    
    // Return success for the logout component
    return { success: true, message: 'Logged out successfully' };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        initializing,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};