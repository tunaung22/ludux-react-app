import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext({
  authenticated: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const value = {
    authenticated,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
