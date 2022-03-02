import React, { useState } from 'react';

export interface IAppLayoutContextValue {
  // appBarHeight: number;
  // drawerWidth: number | string;
  // drawerOpened: boolean;
  // openSidebar: (open?: boolean) => void;
}

export const AppLayoutContext = React.createContext<IAppLayoutContextValue>({
  // appBarHeight: 48,
  // drawerWidth: 'auto',
  // drawerOpened: false,
  // openSidebar: () => {},
});

/**
 * App Layout Context
 * For ui updates:
 *   navbar
 *   sidebar
 */
export function AppLayoutContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [drawerOpened, setDrawerOpened] = useState(false);

  // initial context value
  const value: IAppLayoutContextValue = {
    // appBarHeight: 64,
    // drawerWidth: 200,
    // drawerOpened: drawerOpened,
    // openSidebar: (open) => {
    //   open === undefined ? setDrawerOpened(false) : setDrawerOpened(open);
    // },
  };

  return (
    <AppLayoutContext.Provider value={value}>
      {children}
    </AppLayoutContext.Provider>
  );
}
