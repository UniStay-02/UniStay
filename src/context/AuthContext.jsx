import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Load logged-in user when app starts
  useEffect(() => {
    const user = localStorage.getItem("currentUser");

    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // Register a new user
  const register = (userData) => {
    localStorage.setItem("registeredUser", JSON.stringify(userData));
  };

  // Login
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setCurrentUser(storedUser);
      localStorage.setItem("currentUser", JSON.stringify(storedUser));
      return true;
    }

    return false;
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export function useAuth() {
  return useContext(AuthContext);
}