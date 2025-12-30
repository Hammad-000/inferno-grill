// src/hooks/useAuth.js
import { useState } from "react";
import supabase from "../../SupabaseClient"; // Import the supabase client

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle user sign-up
  const signUpNewUser = async (email, password) => {
    setLoading(true);
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return { success: false, error };
      }

      setUser(user); // Set user if sign-up is successful
      return { success: true, user };
    } catch (err) {
      setError("An unexpected error occurred.");
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  

  return {
    user,
    error,
    loading,
    signUpNewUser,
  };
};
