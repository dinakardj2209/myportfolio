import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext(null);

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(preference) {
  if (preference === 'light' || preference === 'dark') return preference;
  return getSystemTheme();
}

function applyTheme(resolved) {
  document.documentElement.setAttribute('data-theme', resolved);
}

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(preference));

  useEffect(() => {
    const resolved = resolveTheme(preference);
    setResolvedTheme(resolved);
    applyTheme(resolved);
    localStorage.setItem(STORAGE_KEY, preference);
  }, [preference]);

  useEffect(() => {
    if (preference !== 'system') return undefined;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const resolved = getSystemTheme();
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  return (
    <ThemeContext.Provider value={{ preference, resolvedTheme, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
