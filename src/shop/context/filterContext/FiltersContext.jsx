import { createContext, useContext } from 'react';

export const FilterContext = createContext({});

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  return context;
};
