import { useEffect, useState } from 'react';
import { ThemeContext } from './';
import {
  getLocalStorage,
  saveLocalStorage,
} from '../../../utilities/localStorage';

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getLocalStorage('theme'));
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  
  useEffect(() => {
    saveLocalStorage(isDark, 'theme');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
