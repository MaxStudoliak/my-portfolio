'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { lightTheme, darkTheme } from '@/theme';
import { useState, createContext, useContext, ReactNode, useMemo, useEffect } from 'react';

interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const THEME_STORAGE_KEY = 'portfolio-theme';

// Function to get system theme preference
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'dark';

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

// Get saved theme from localStorage or use system preference
const getSavedTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'dark';

  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;

  return getSystemTheme();
};

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>(getSystemTheme);
  const [mounted, setMounted] = useState(false);
  const [userPreference, setUserPreference] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = getSavedTheme();
    const hasUserPreference = localStorage.getItem(THEME_STORAGE_KEY) !== null;

    setMode(savedTheme);
    setUserPreference(hasUserPreference);

    // Listen for system theme changes only if user hasn't set a preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const hasPreference = localStorage.getItem(THEME_STORAGE_KEY) !== null;
      if (!hasPreference) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem(THEME_STORAGE_KEY, newMode);
        setUserPreference(true);
      }
      return newMode;
    });
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <AppRouterCacheProvider>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppRouterCacheProvider>
  );
}
