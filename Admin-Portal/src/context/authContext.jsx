import { createContext, useContext, useEffect, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to hold the JWT token and user details
  const [userName, setuserName] = useState(null);
  const [token, setToken] = useState(null);
 

  // Function to save user and token to localStorage (for persistence)
  const saveUser = (userData, jwtToken) => {
    localStorage.setItem('userName', JSON.stringify(userData));
    localStorage.setItem('token', jwtToken);
    setuserName(userData);
    setToken(jwtToken);

  };

  // Function to clear user data (e.g., during logout)
  const logout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    setuserName(null);
    setToken(null);
   
  };

  // Check if user is logged in
  const isLoggedIn = () => {
    return token !== null;
  };

  

  // Check for user/token in localStorage when app is loaded
  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setuserName(JSON.parse(storedUser));
      setToken(storedToken);
    }
   
  }, []);

  return (
    <AuthContext.Provider value={{ userName, token, saveUser, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};