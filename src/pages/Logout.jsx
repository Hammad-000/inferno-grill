import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { useAuth } from '../context/AuthContext'; // Assuming you have this context

function Logout() {
  const { logout } = useAuth(); // Accessing the logout function from the AuthContext
  const navigate = useNavigate(); // Hook to programmatically navigate to other pages

  useEffect(() => {
    // Perform logout
    logout();

    // Redirect to login page (or home, or other page)
    navigate('/login'); // Adjust the route based on your app flow
  }, [logout, navigate]);

  return (
    <div>Logging out...</div>
  );
}

export default Logout;
