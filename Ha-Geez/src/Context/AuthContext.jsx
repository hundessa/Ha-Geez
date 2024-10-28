import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

// Create a UserContext
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a request to the backend to fetch user data
        const { data } = await axios.get("http://localhost:4000/auth/user", { withCredentials: true });
        setUser(data.user); // Set the user data in state
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
