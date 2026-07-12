import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get logged-in user from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("unistayUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save user whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("unistayUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("unistayUser");
    }
  }, [user]);

    // Login function — called as login(token, userData) from Login.jsx.
  // The token isn't used yet (no real backend), but the signature is kept
  // so it's a one-line swap later when a real API returns a real token.
  const login = (token , userData) => {
    setUser(userData);
  };

    const register = (token, userData) => {
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("unistayUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
