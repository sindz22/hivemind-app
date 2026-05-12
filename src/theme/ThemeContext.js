import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import { LightColors, DarkColors, getTypography } from './colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to dark mode always; user can toggle manually in Settings
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = useCallback(() => setIsDarkMode(prev => !prev), []);

  const colors = isDarkMode ? DarkColors : LightColors;
  const Typography = getTypography(colors);

  const theme = {
    isDarkMode,
    colors,
    toggleTheme,
    Typography,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
