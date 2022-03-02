import {
  DeprecatedThemeOptions,
  ThemeOptions,
} from '@material-ui/core';
// import { blue, deepOrange} from '@material-ui/core/colors'

// 'main'
export const mainTheme: ThemeOptions = {
  palette: {
    mode: 'light',
  },
};

// 'dark'
export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
  // components: {
  //   MuiPaper: {

  //   }
  // }
};

// 'morning'
export const morningTheme: ThemeOptions = {
  palette: {},
};

// 'midnight'
export const midnightTheme: DeprecatedThemeOptions = {
  palette: {
    mode: 'light',
  },
};

// 'summer'
export const summerTheme: ThemeOptions = {
  palette: {},
};

export const winterTheme: ThemeOptions = {
  palette: {},
};

// func
export const getTheme = (themeName: string): ThemeOptions => {
  if (themeName === 'dark') return darkTheme;
  return mainTheme;
};
