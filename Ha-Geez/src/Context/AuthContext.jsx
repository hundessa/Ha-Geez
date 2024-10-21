import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Create a UserContext
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Provide User Context
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const storedUser = localStorage.getItem("user");

    console.log("Token:", token); // Log token
  console.log("Stored User:", storedUser); // Log stored user
    

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);
        const userData = {
          id: decodedToken.id,
          email: decodedToken.email,
          firstname: decodedToken.firstname,
          lastname: decodedToken.lastname,
          role: decodedToken.role,
        };
        setUser(userData);
        setAuthToken(token);
        localStorage.setItem("user", JSON.stringify(userData));
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } catch (error) {
        console.error("Failed to decode token:", error);
        localStorage.removeItem("jwt");
      }
    } else if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        localStorage.removeItem("user");
      }
    }

    setLoading(false); // Set loading to false after user data is processed
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, authToken, loading }}>
      {children}
    </UserContext.Provider>
  );
};

