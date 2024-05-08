import { useThemeContext } from '../context/themeContext/';

export const ShopLayout = ({ children }) => {
  const { isDark } = useThemeContext();

  return (
    <div className={`layout ${isDark ? 'layout__dark' : ' layout__light'}`}>
      {children}
    </div>
  );
};
