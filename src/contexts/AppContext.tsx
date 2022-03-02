import React from 'react';

export interface AppContextValue {}

export const AppContext = React.createContext<AppContextValue>({});

export function AppContextProvider({ children }: React.PropsWithChildren<{}>) {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
