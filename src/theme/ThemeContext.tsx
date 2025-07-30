import React, { createContext, useContext, ReactNode } from 'react';
import { theme, Theme } from './theme';

const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);