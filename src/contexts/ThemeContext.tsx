import React, { useContext, useState, useEffect } from 'react';

type ThemeContextValue = {
  theme: string[];
  currentTheme: string;
  changeTheme: (theme: string) => void;

  appBarHeight: number;
  drawerWidth: number | string;
  drawerOpened: boolean;
  openSidebar: (open?: boolean) => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: ['main', 'dark'],
  currentTheme: 'main',
  changeTheme: (theme: string) => {},
  appBarHeight: 48,
  drawerWidth: 'auto',
  drawerOpened: false,
  openSidebar: () => {},
});

type ThemeContextProviderProps = {
  themeCallback: (name: string) => void;
};
export function ThemeContextProvider({
  children,
  themeCallback,
}: React.PropsWithChildren<ThemeContextProviderProps>) {
  const [themeName, setThemeName] = useState('main');
  const [opened, setOpened] = useState(false);

  // read theme name from localstorage and
  // save to local state themeName
  useEffect(() => {
    let currentTheme = window.localStorage.getItem('theme');
    if (!currentTheme) {
      // if value is none
      currentTheme = 'main';
      window.localStorage.setItem('theme', currentTheme);
      setThemeName(currentTheme);
    } else if (currentTheme === 'main' || currentTheme === 'dark') {
      // if value is one of 'main or dark'
      setThemeName(currentTheme);
    } else {
      // if value is none of 'main or dark'
      currentTheme = 'main';
      window.localStorage.setItem('theme', currentTheme);
      setThemeName(currentTheme);
    }
    return () => {};
  }, [setThemeName]);

  // initial value for context
  const initialValue: ThemeContextValue = {
    theme: ['main', 'dark'],
    currentTheme: themeName,
    appBarHeight: 64,
    drawerWidth: 200,
    drawerOpened: opened,
    changeTheme: (name: string) => {
      setThemeName(name);
      themeCallback(name);
      window.localStorage.setItem('theme', name);
    },
    openSidebar: (open) => {
      open === undefined ? setOpened(false) : setOpened(open);
    },
  };

  return (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
