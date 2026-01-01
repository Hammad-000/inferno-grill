// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
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

  const signup = (email, password) => {
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'User already exists' };
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      email,
      password,
      name: email.split('@')[0],
      createdAt: new Date().toISOString()
    };
    
    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Set auth data
    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name
    };
    
    localStorage.setItem('authToken', 'token-' + newUser.id);
    localStorage.setItem('userData', JSON.stringify(userData));
    
    setUser(userData);
    navigate('/');
    
    return { success: true, user: userData };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return { success: false, error: 'Invalid credentials' };
    }
    
    const userData = {
      id: user.id,
      email: user.email,
      name: user.name
    };
    
    localStorage.setItem('authToken', 'token-' + user.id);
    localStorage.setItem('userData', JSON.stringify(userData));
    
    setUser(userData);
    navigate('/');
    
    return { success: true, user: userData };
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser(null);
    navigate('/login');
    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        initializing,
        signup,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};