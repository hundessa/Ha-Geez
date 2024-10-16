import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import * as jwtDecode from "jwt-decode";

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

  useEffect(() => {
    // Get the JWT token from cookies
    const token = Cookies.get("jwt");

    if (token) {
      try {
        // Decode the JWT token to extract user information
        const decodedToken = jwtDecode(token);

        // Assuming your token has name, email, username
        setUser({
          name: decodedToken.name,
          email: decodedToken.email,
          username: decodedToken.username,
        });

        // Save the token for future API calls
        setAuthToken(token);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, authToken }}>
      {children}
    </UserContext.Provider>
  );
};
