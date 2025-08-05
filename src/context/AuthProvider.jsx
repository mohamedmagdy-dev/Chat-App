import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const login = (user) => {
    setUser(user);
  };

  const getUsers = (users) => {
    setUsers(users);
  };

  return (
    <AuthContext.Provider value={{ user, users, login, getUsers }}>
      {children}
    </AuthContext.Provider>
  );
};
