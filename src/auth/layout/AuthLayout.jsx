import { useThemeContext } from '../../shop/context/themeContext';

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({ children }) => {
  const { isDark } = useThemeContext();
  console.log(isDark);
  return (
    <div className={`${isDark ? 'layout__dark' : 'layout__light'}`}>
      {children}
    </div>
  );
};
