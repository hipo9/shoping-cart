import { useContext, useId } from 'react';
import { FilterContext } from '../context/filterContext/FiltersContext';

export const Filters = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const { minPriceFilterId } = useId();

  const handleChangeCategory = (e) => {
    const val = e.target.value;
    setFilters((prev) => ({
      ...prev,
      category: val,
    }));
  };
  const handleChangeminPrice = (e) => {
    const val = e.target.value;
    setFilters((prev) => ({
      ...prev,
      minPrice: val,
    }));
  };

  // console.log(filters);
  return (
    <div className='filters'>
      <div className='filters__container-range'>
        <label className='filters__label' htmlFor={minPriceFilterId}>
          Precio Minimo
        </label>
        <input
          min={0}
          max={1000}
          type='range'
          id={minPriceFilterId}
          onChange={handleChangeminPrice}
        />
        <span className='filters__span'>${filters.minPrice}</span>
      </div>

      <select
        name='category'
        id='category'
        onChange={handleChangeCategory}
        value={filters.category}>
        <option value='all'>All</option>
        <option value="women's clothing">women's clothing</option>
        <option value="men's clothing">men's clothing</option>
        <option value='electronics'>electronics</option>
      </select>
    </div>
  );
};
