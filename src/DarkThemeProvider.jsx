import React, { createContext, useState } from 'react';

const THEME_OPTIONS = { dark: 'dark', light: 'light' };

export const GetDarkThemeContext = createContext({});
export const ToggleDarkThemeContext = createContext(null);

export default function DarkThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Step 1: get theme from localStorage
    const localStorageTheme = localStorage.getItem('theme');

    // Step 2: get theme of device (holds a fallback of "light" within)
    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_OPTIONS.dark
      : THEME_OPTIONS.light;

    // Step 3: current theme is... (localStorage takes precedence over device)
    const currentTheme = localStorageTheme || deviceTheme;

    // Step 4: set html's theme based on currentTheme
    document.body.setAttribute('class', currentTheme);

    // Step 5: return isDarkTheme boolean
    return currentTheme === THEME_OPTIONS.dark;
  });

  const toggleDarkMode = () => {
    const themeToBe = isDarkMode ? THEME_OPTIONS.light : THEME_OPTIONS.dark;
    localStorage.setItem('theme', themeToBe);
    document.body.setAttribute('class', themeToBe);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <GetDarkThemeContext.Provider value={{ isDarkMode }}>
      <ToggleDarkThemeContext.Provider value={{ toggleDarkMode }}>{children}</ToggleDarkThemeContext.Provider>
    </GetDarkThemeContext.Provider>
  );
}
