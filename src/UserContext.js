import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, loginMessage, setLoginMessage }}>
      {children}
    </UserContext.Provider>
  );
};
