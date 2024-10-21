import { getAuth, onAuthStateChanged } from "firebase/auth";

export const checkAuth = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User authenticated:", user.uid);
        resolve(true); // User is authenticated
      } else {
        console.log("User is not authenticated.");
        resolve(false); // User is not authenticated
      }
    });
  });
};
