import React, { createContext, useState } from 'react';

export const GetDarkThemeContext = createContext(null);
export const ToggleDarkThemeContext = createContext(null);

export default function DarkThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const themeModeInLocalStorage = localStorage.getItem('theme');
    return themeModeInLocalStorage
      ? themeModeInLocalStorage === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleDarkMode = () => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.setAttribute('class', isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <GetDarkThemeContext.Provider value={{ isDarkMode }}>
      <ToggleDarkThemeContext.Provider value={{ toggleDarkMode }}>{children}</ToggleDarkThemeContext.Provider>
    </GetDarkThemeContext.Provider>
  );
}
