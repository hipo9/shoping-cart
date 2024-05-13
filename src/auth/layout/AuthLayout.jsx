import { useThemeContext } from '../../shop/context/themeContext';

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({ children }) => {
  const { isDark } = useThemeContext();

  return (
    <div className={`login ${isDark ? 'layout__dark' : 'layout__light'}`}>
      {children}
    </div>
  );
};
