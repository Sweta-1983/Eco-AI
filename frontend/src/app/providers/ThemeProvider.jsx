import { useEffect, useMemo, useState } from 'react';
import { THEME_STORAGE_KEY } from '../../constants/storage.js';
import { ThemeContext } from './themeContext.js';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_STORAGE_KEY) || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
