import { useThemeContext } from '../shop/context/themeContext/ThemeContext';

export const Form = ({ children, onSubmit }) => {
  const { isDark } = useThemeContext();
  return (
    <form onSubmit={onSubmit} className={isDark ? 'form-dark' : 'form-light'}>
      {children}
    </form>
  );
};
