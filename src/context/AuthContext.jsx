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

  // Login function
  const login = (userData) => {
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
        logout,
        isAuthenticated: !!user,
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
